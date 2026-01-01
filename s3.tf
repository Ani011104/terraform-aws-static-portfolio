/*

Firstly i will need a s3 bucket
which has to be made private

Next i will need origin access control
to allow cloudfront to access the s3 bucket

Next i will need a policy for s3
which accepts only cloudfront to access the s3 bucket
*/

resource "aws_s3_bucket" "s3_bucket1" {
  bucket = var.Bucket_Name

  tags = merge(local.common_tags, {
    Name = var.Bucket_Name
  })
}
#### make the s3 bucket private so that only the cloudfront can access the s3 bucket

resource "aws_s3_bucket_public_access_block" "s3_public_access_block" {
  bucket = aws_s3_bucket.s3_bucket1.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}


#### creat a policy for the s3 to allow only a particular cloudfront distrubtion to access the contents inside the s3 bucket

resource "aws_s3_bucket_policy" "s3_policy" {
  bucket     = aws_s3_bucket.s3_bucket1.id
  depends_on = [aws_s3_bucket_public_access_block.s3_public_access_block]
  policy = jsonencode(
    {
      "Version" : "2012-10-17",
      "Statement" : [
        {
          "Sid" : "Allow CloudFront Access",
          "Effect" : "Allow",
          "Principal" : {
            "Service" : "cloudfront.amazonaws.com"
          },
          "Action" : [
            "s3:GetObject"
          ],
          "Resource" : "${aws_s3_bucket.s3_bucket1.arn}/*",
          "Condition" : {
            "ArnEquals" : {
              "aws:SourceArn" : aws_cloudfront_distribution.s3_distribution.arn #### -----------> needs to be changed to actually cloud front distrubtion arn id
            }
          }
        }
      ]
    }

  )

}


#### upload the build artifacts (dist folder) to s3
resource "aws_s3_object" "s3_object" {
  for_each = fileset("${path.module}/www/dist", "**")
  bucket   = aws_s3_bucket.s3_bucket1.id
  key      = each.value
  source   = "${path.module}/www/dist/${each.value}"
  etag     = filemd5("${path.module}/www/dist/${each.value}")

  content_type = lookup({
    "html" = "text/html"
    "css"  = "text/css"
    "js"   = "application/javascript"
    "png"  = "image/png"
    "jpg"  = "image/jpeg"
    "svg"  = "image/svg+xml"
    "json" = "application/json"
  }, split(".", each.value)[length(split(".", each.value)) - 1], "application/octet-stream")
}

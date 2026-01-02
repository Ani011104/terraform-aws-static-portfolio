/*
S3 bucket (private)
CloudFront OAC access only
Correct bucket policy for OAC
Upload static files
*/

resource "aws_s3_bucket" "s3_bucket1" {
  bucket = var.Bucket_Name

  tags = merge(local.common_tags, {
    Name = var.Bucket_Name
  })
}

# Block all public access
resource "aws_s3_bucket_public_access_block" "s3_public_access_block" {
  bucket = aws_s3_bucket.s3_bucket1.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Allow ONLY CloudFront (via OAC) to read objects
resource "aws_s3_bucket_policy" "s3_policy" {
  bucket = aws_s3_bucket.s3_bucket1.id

  depends_on = [
    aws_cloudfront_distribution.s3_distribution
  ]

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowCloudFrontServicePrincipal"
        Effect = "Allow"

        Principal = {
          Service = "cloudfront.amazonaws.com"
        }

        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.s3_bucket1.arn}/*"

        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.s3_distribution.arn
          }
        }
      }
    ]
  })
}

# Upload static build files to bucket root
resource "aws_s3_object" "s3_object" {
  for_each = fileset("${path.module}/www/dist", "**")

  bucket = aws_s3_bucket.s3_bucket1.id
  key    = each.value
  source = "${path.module}/www/dist/${each.value}"
  etag   = filemd5("${path.module}/www/dist/${each.value}")

  content_type = lookup({
    html = "text/html"
    css  = "text/css"
    js   = "application/javascript"
    png  = "image/png"
    jpg  = "image/jpeg"
    svg  = "image/svg+xml"
    json = "application/json"
  }, lower(regex("\\.([^.]+)$", each.value)[0]), "application/octet-stream")
}

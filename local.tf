locals {
  common_tags = {
    Name        = var.Project_Name
    Environment = var.Environment
    Project     = var.Project_Name
    Owner       = "Anirudh"
  }

  s3_origin_id = "s3-${var.Bucket_Name}"
}

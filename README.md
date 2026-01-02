# AWS Static Portfolio Website Hosting with Terraform

This project demonstrates how to host a static Portfolio website on AWS using Terraform. It provisions an S3 bucket for storage and a CloudFront distribution for content delivery (CDN), ensuring secure and fast access to the website. It also uses ACM to manage SSL/TLS certificates for the website and Route 53 to manage DNS records for the website.

## Architecture

- **AWS S3**: Stores the static assets (HTML, CSS, JS, Images) of the Portfolio website.
- **AWS CloudFront**: Acts as a CDN to cache and serve the content globally with low latency. It also handles SSL/TLS termination (HTTPS).
- **Origin Access Control (OAC)**: Restricts access to the S3 bucket so that only the CloudFront distribution can read the files. The S3 bucket is private.
- **AWS Certificate Manager (ACM)**: Manages SSL/TLS certificates for the website.
- **AWS Route 53**: Manages DNS records for the website.

## Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) installed.
- [AWS CLI](https://aws.amazon.com/cli/) configured with appropriate credentials.
- [Node.js](https://nodejs.org/) and npm (for building the Portfolio website).

## Project Structure

- `www/`: Contains the Portfolio source code.
- `*.tf`: Terraform configuration files.

## Usage

### 1. Build the Portfolio Application

Navigate to the `www` directory and build the project:

```bash
cd www
npm install
npm run build
cd ..
```

This will generate the production build artifacts in `www/dist`.

### 2. Deploy Infrastructure

Initialize and apply the Terraform configuration:

```bash
terraform init
terraform apply
```

Type `yes` when prompted to confirm the creation of resources.

### 3. Access the Website

After the deployment is complete, the protfolio website will be avaiable at anirudhs.xyz with https

## Resources Created

- `aws_s3_bucket`: Private bucket to host website files.
- `aws_s3_object`: Uploads files from `www/dist` to S3.
- `aws_cloudfront_distribution`: CDN configuration.
- `aws_cloudfront_origin_access_control`: Security configuration for S3-CloudFront integration.
- `aws_s3_bucket_policy`: Policy to allow CloudFront OAC to access S3 objects.
- `aws_acm_certificate`: SSL certificate for the website.
- `aws_route53_record`: Route 53 records for the website.
- `aws_acm_certificate_validation`: Certificate validation for the website.

## Cleanup

To remove all created resources:

```bash
terraform destroy
```

<h1>Static sample Website Hosting on Amazon S3</h1>

This repository demonstrates how to host a static sample website using Amazon S3 Static Website Hosting.
The project uses a single index.html file with inbuilt CSS and JavaScript and publicly accessible images from the internet.

The document explains the complete workflow, starting from bucket creation to making the site publicly accessible using a bucket policy generated via the AWS Policy Generator.

<h2>Project Overview</h2>

Static frontend (HTML, CSS, JavaScript)

Hosted on Amazon S3

No backend or server required

Public access enabled via S3 bucket policy

Suitable for demos, learning, and portfolio projects

<h2>Prerequisites</h2>

AWS account

Basic understanding of AWS S3

Static website files:

index.html

error.html (recommended)

<h1>Step 1: Create an S3 Bucket</h1>

Sign in to the AWS Management Console

Navigate to S3

Click Create bucket

Configure the bucket:

Bucket name: Must be globally unique (example: my-ecommerce-static-site)

Region: Choose any region

Uncheck:

Block all public access

Acknowledge the public access warning

Click Create bucket

<h1>Step 2: Upload Website Files</h1>

Open the created bucket

Click Upload

Upload:

index.html

error.html (if available)

Click Upload

<h1>Step 3: Enable Static Website Hosting</h1>

Go to the Properties tab of the bucket

Scroll to the bottom and choose Static website hosting

Click Edit

Enable static website hosting

Configure:

Index document: index.html

Error document: error.html

Save changes

After saving, note the Bucket website endpoint URL.

<h1>Step 4: Create Bucket Policy Using AWS Policy Generator</h1>

The bucket policy allows public read access to website files.

<h2>4.1 Open AWS Policy Generator</h2>

Go to:
https://awspolicygen.s3.amazonaws.com/policygen.html

<h2>4.2 Configure Policy Generator</h2>

Fill the form as follows:

    Policy Type:
    S3 Bucket Policy
    
    Effect:
    Allow
    
    Principal:
    *
    
    AWS Service:
    Amazon S3
    
    Actions:
    GetObject
    
    Amazon Resource Name (ARN):
    
    arn:aws:s3:::your-bucket-name/*


Click Add Statement.

<h2>4.3 Generate Policy</h2>

Click Generate Policy

Copy the generated JSON policy

Example:

    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "PublicReadGetObject",
          "Effect": "Allow",
          "Principal": "*",
          "Action": "s3:GetObject",
          "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
      ]
    }

<h1>Step 5: Attach Bucket Policy</h1>

Go back to your S3 bucket

Open the Permissions tab

Scroll to Bucket policy

Paste the generated policy

Save changes

<h1>Step 6: Verify Public Access Settings</h1>

Ensure:

Block all public access is disabled

Bucket policy is successfully saved

Objects are accessible publicly

<h1>Step 7: Access the Website</h1>

Use the S3 Static Website Endpoint, not the object URL.

Format:

http://bucket-name.s3-website-region.amazonaws.com


<h1>Conclusion</h1>

This setup demonstrates how to host a static e-commerce website on Amazon S3 using industry-standard practices.
It is simple, cost-effective, and suitable for learning AWS fundamentals, frontend hosting, and cloud deployment workflows

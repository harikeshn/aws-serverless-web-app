# aws-serverless-web-app


AWS Serverless Web App

OVERVIEW
A simple web application using AWS Lambda, API Gateway, and DynamoDB.
Users submit a form in browser, AWS stores data in a DynamoDB table via Lambda.

AWS SERVICES USED
- Amazon S3 (for hosting frontend)
- API Gateway
- AWS Lambda
- Amazon DynamoDB
- IAM Roles

PROJECT FLOW
User → Web Form → API Gateway → Lambda → DynamoDB

RESULT
Data submitted from the web application is stored in DynamoDB.


SETUP STEPS

1. Create DynamoDB table FeedbackTable
2. Create Lambda with the code above
3. Create API Gateway POST endpoint
4. Replace API URL in index.html
5. Open index.html in browser

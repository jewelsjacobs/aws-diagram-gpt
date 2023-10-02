const sdk = require('api')('@eraser/v1.0#fc5xxr2vljt81n3s');

sdk.auth('vPGolFMvsWZvpOWor8oP');
sdk.generateDiagramFromPrompt({
  diagramType: 'cloud-architecture-diagram',
  background: false,
  theme: 'light',
  scale: '2',
  returnFile: true,
  text: 'User: Uploads a Word document via the User Interface. User Interface: The front end is a static React single page application hosted on S3 and served via Amazon CloudFront.  API Gateway: Users interact via an API Gateway REST API. S3 Bucket: Stores the uploaded Word document and triggers a Lambda function. Lambda Function: Processes the uploaded file and stores metadata in DynamoDB. Also triggers Step Functions. DynamoDB: Stores metadata related to the uploaded file. Step Functions: Orchestrates the document conversion and email sending. SES (Simple Email Service): Sends the converted document file via email. Github Repo: Holds the source code. CodePipeline: Manages the CI/CD pipeline. CodeBuild: Builds the application. API Gateway: Exposes the Lambda function as an API. SNS (Simple Notification Service): Sends notifications to admin. Admin: Receives notifications.'
})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));
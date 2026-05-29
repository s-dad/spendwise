# Spendwise

A serverless personal budget tracker built on AWS. 

### Stack
- **Frontend**: React → S3 + CloudFront
- **Backend**: Python Lambda + API Gateway
- **Database**: DynamoDB
- **Auth**: Cognito
- **Infrastructure**: AWS SAM
- **CI/CD**: GitHub Actions

### Architecture
![Architecture](docs/architecture.png)

### Features
- Add expenses by category, date, and amount and delete it
- Dashboard with total spent and category breakdown
- Secure login via Cognito

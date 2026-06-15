# Spendwise

A serverless personal budget tracker built on AWS.

## Why This Project
I built Spendwise to get hands-on experience with AWS serverless architecture in one cohesive project. Rather than isolated labs, I wanted something I could deploy end to end — with real auth, a real database, and a real CI/CD pipeline. Every service used here maps directly to AWS SAA exam topics and cloud ops role requirements.

## Stack
- **Frontend**: React → S3 + CloudFront
- **Backend**: Python Lambda + API Gateway
- **Database**: DynamoDB
- **Auth**: Cognito
- **Infrastructure**: AWS SAM
- **CI/CD**: GitHub Actions

## Architecture
![Architecture](docs/architecture.png)

## Features
- Add expenses by category, date, and amount
- Dashboard with total spent and category breakdown
- Delete expenses
- Secure login via Cognito

## Screenshots
![Login](docs/login-screenshot.png)
![Dashboard](docs/screenshot-1.png)
![Expenses](docs/screenshot-2.png)
![Delete Expense](docs/screenshot-3.png)


## What I Learned
- **AWS SAM** defines the entire backend Lambda functions, DynamoDB table, API Gateway routes, and IAM roles — in a single `template.yaml`. One command deploys everything.
- **CORS errors** are browser security enforcement, not frontend bugs. The fix always lives on the API side.
- **DynamoDB** returns numeric values as strings in some SDK versions. Always cast with `parseFloat()` before doing math.
- **Cognito app clients** for browser-based apps must be public with no client secret client secrets are for server-side apps only.
- **GitHub Actions** secrets keep AWS credentials out of code while still enabling automated deployments.


## Note on Live Environment
The AWS backend was decommissioned after development to manage cloud credit usage. The full infrastructure can be redeployed in minutes using `sam deploy`  the pipeline and IaC are fully intact.



## Running Locally
Clone the repo and install frontend dependencies:

```bash
git clone https://github.com/s-dad/SpendWise.git
cd SpendWise/frontend
npm install
npm start
```

To deploy the full backend you will need your own AWS account:

```bash
cd infrastructure/spendwise-backend
sam build
sam deploy --guided
```

Update `src/api.js` with your API Gateway URL from the CloudFormation Outputs, and create a Cognito user pool following the setup in the [docs](docs/) folder.




## License
MIT






















import json
import boto3
import uuid
import os
from datetime import datetime

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ['TABLE_NAME'])

def lambda_handler(event, context):
    try:
        body = json.loads(event['body'])
        
        item = {
            'id': str(uuid.uuid4()),
            'amount': str(body['amount']),
            'category': body['category'],
            'date': body['date'],
            'note': body.get('note', ''),
            'created_at': datetime.utcnow().isoformat()
        }
        
        table.put_item(Item=item)
        
        return {
            'statusCode': 201,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps(item)
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)})
        }
import * as cdk from 'aws-cdk-lib'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as apigw from 'aws-cdk-lib/aws-apigateway'

export class CdkWorkshopStack extends cdk.Stack {
	constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
		super(scope, id, props)

		// defines an AWS Lambda resource
		const hello = new lambda.Function(this, 'HelloHanlder', {
			runtime: lambda.Runtime.NODEJS_14_X,
			code: lambda.Code.fromAsset('lambda'),
			handler: 'hello.handler',
		})

		// defines an API Gateway REST API resource backed by our "hello" function.
		new apigw.LambdaRestApi(this, 'Endpoint', {
			handler: hello,
		})
	}
}

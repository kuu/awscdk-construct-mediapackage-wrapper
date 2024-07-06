import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import { AssetCode, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export interface LambdaEdgeProps {
  readonly code: AssetCode; // Lambda@Edge function source asset
}

export class LambdaEdge extends Construct {
  public readonly func: cloudfront.experimental.EdgeFunction;

  constructor(scope: Construct, id: string, props: LambdaEdgeProps) {
    super(scope, id);

    const { code } = props;

    // Create Lambda@Edge function
    this.func = new cloudfront.experimental.EdgeFunction(this, `LambdaEdgeFunction${id}`, {
      runtime: Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code,
    });
  }
}
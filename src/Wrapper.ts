import { AssetCode } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { CloudFront } from './CloudFront';
import { LambdaEdge } from './LambdaEdge';

export interface WrapperProps {
  readonly domainName: string;
  readonly hlsWrapperFunction?: AssetCode;
  readonly dashWrapperFunction?: AssetCode;
}

export class Wrapper extends Construct {
  public readonly cf: CloudFront;

  constructor(scope: Construct, id: string, props: WrapperProps) {
    super(scope, id);

    const {
      domainName,
      hlsWrapperFunction,
      dashWrapperFunction,
    } = props;

    // Create Lambda function for manipulating HLS/DASH manifest
    const hlsLambdaEdge = hlsWrapperFunction ? new LambdaEdge(this, 'HLSLambdaEdgeFunction', {
      code: hlsWrapperFunction,
    }) : undefined;
    const dashLambdaEdge = dashWrapperFunction ? new LambdaEdge(this, 'DASHLambdaEdgeFunction', {
      code: dashWrapperFunction,
    }) : undefined;

    // Create CloudFront distribution
    this.cf = new CloudFront(this, 'CloudFrontDistribution', {
      domainName,
      hlsLambdaEdge,
      dashLambdaEdge,
    });
  }
}
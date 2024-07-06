import { Aws } from 'aws-cdk-lib';
import {
  OriginRequestPolicy,
  OriginSslPolicy,
  OriginProtocolPolicy,
  OriginRequestHeaderBehavior,
  OriginRequestQueryStringBehavior,
  Distribution,
  SecurityPolicyProtocol,
  ViewerProtocolPolicy,
  CachePolicy,
  AllowedMethods,
  LambdaEdgeEventType,
} from 'aws-cdk-lib/aws-cloudfront';
import { HttpOrigin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { Construct } from 'constructs';
import { LambdaEdge } from './LambdaEdge';

export interface CloudFrontProps {
  readonly domainName: string;
  readonly hlsLambdaEdge?: LambdaEdge;
  readonly dashLambdaEdge?: LambdaEdge;
}

export class CloudFront extends Construct {
  public readonly distribution: Distribution;

  constructor(scope: Construct, id: string, {
    domainName,
    hlsLambdaEdge,
    dashLambdaEdge,
  }: CloudFrontProps) {

    super(scope, id);

    // Create origin
    const origin = new HttpOrigin(
      domainName,
      {
        originSslProtocols: [OriginSslPolicy.SSL_V3],
        protocolPolicy: OriginProtocolPolicy.HTTPS_ONLY,
      },
    );

    // Create Origin Request Policy with CloudFront Header
    const originRequestPolicy = new OriginRequestPolicy(this, 'OriginRequestPolicy',
      {
        originRequestPolicyName: `${Aws.STACK_NAME}-OriginRequestPolicy`,
        comment: 'Policy to FWD CloudFront headers',
        headerBehavior: OriginRequestHeaderBehavior.allowList(
          'CloudFront-Viewer-Address',
          'CloudFront-Viewer-Country',
          'CloudFront-Viewer-City',
          'Referer',
          'User-Agent',
          'Access-Control-Request-Method',
          'Access-Control-Request-Headers',
        ),
        queryStringBehavior: OriginRequestQueryStringBehavior.all(),
      },
    );

    // Create CloudFront distribution
    const distribution = new Distribution(this, 'Distribution', {
      comment: `${Aws.STACK_NAME} - CloudFront distribution for wrapping MediaPackage`,
      defaultRootObject: '',
      minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_2016,
      defaultBehavior: { // HLS/DASH segments
        origin,
        cachePolicy: CachePolicy.ELEMENTAL_MEDIA_PACKAGE,
        allowedMethods: AllowedMethods.ALLOW_GET_HEAD,
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        originRequestPolicy,
      },
      additionalBehaviors: {
        '*.m3u8': { // MediaPackage HLS manifest
          origin,
          viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          allowedMethods: AllowedMethods.ALLOW_ALL,
          cachePolicy: CachePolicy.ELEMENTAL_MEDIA_PACKAGE,
          originRequestPolicy,
          edgeLambdas: hlsLambdaEdge ? [{
            eventType: LambdaEdgeEventType.ORIGIN_REQUEST,
            functionVersion: hlsLambdaEdge.func.currentVersion,
            includeBody: false,
          }] : undefined,
        },
        '*.mpd': { // MediaPackage DASH manifest
          origin,
          viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          allowedMethods: AllowedMethods.ALLOW_ALL,
          cachePolicy: CachePolicy.ELEMENTAL_MEDIA_PACKAGE,
          originRequestPolicy,
          edgeLambdas: dashLambdaEdge ? [{
            eventType: LambdaEdgeEventType.ORIGIN_REQUEST,
            functionVersion: dashLambdaEdge.func.currentVersion,
            includeBody: false,
          }] : undefined,
        },
      },
    });

    this.distribution = distribution;
  }
}
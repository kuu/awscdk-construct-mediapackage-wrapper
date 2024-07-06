# awscdk-construct-mediapackage-wrapper
[![View on Construct Hub](https://constructs.dev/badge?awscdk-construct-mediapackage-wrapper)](https://constructs.dev/packages/awscdk-construct-mediapackage-wrapper)

CDK Construct for creating wrapper Lambda@Edge functions for MediaPackage endpoints
* You can define two Lambda@Edge functions, each intended for manipulating HLS and DASH manifest
* Each function needs to be stored in a TypeScript (.ts) file and its relative path needs to be passed
* The created Lambda@Edge functions will be set as ORIGIN_REQUEST triggers of a newly created CloudFront distribution

**Input:**
  * MediaPackage's domain name
  * The relative path to the TypeScript file containing the Lambda@Edge function for manipulating HLS manifest
  * The relative path to the TypeScript file containing the Lambda@Edge function for manipulating DASH manifest
**Output:**
  * Lambda@Edge functions
  * CloudFront distribution with associated with the Lambda@Edge functions

## Install
[![NPM](https://nodei.co/npm/awscdk-construct-mediapackage-wrapper.png?mini=true)](https://nodei.co/npm/awscdk-construct-mediapackage-wrapper/)

## Usage
```ts
import { Stack, StackProps, CfnOutput, Fn } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LiveChannelFromMp4 } from 'awscdk-construct-live-channel-from-mp4-file';
import { Wrapper } from 'awscdk-construct-mediapackage-wrapper';

export class ExampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create a live channel (MediaLive + MediaPackage)
    const {empv1: emp} = new LiveChannelFromMp4(this, 'LiveChannelFromMp4', {
      sourceUrl: 's3ssl://example_bucket/test.mp4',
      timecodeBurninPrefix: 'Ch1',
      autoStart: true,
      mediaPackageVersionSpec: 'V1_ONLY',
    });

    const hlsArr = Fn.split('/', emp.endpoints.hls.attrUrl);
    const dashArr = Fn.split('/', emp.endpoints.dash.attrUrl);

    // Create wrapper L@E functions
    const wrapper = new Wrapper(stack, 'Wrapper', {
      domainName: Fn.select(2, hlsArr),
      hlsWrapperFunctionSourcePath: './code/hls/index.ts',
      dashWrapperFunctionSourcePath: './code/dash/index.ts',
    });

    // Print MediaPackage endpoint URL (HLS)
    new CfnOutput(this, "WrappedHLSEndpointURL", {
      value: `https://${wrapper.cf.distribution.distributionDomainName}/out/v1/${Fn.select(5, hlsArr)}/${Fn.select(6, hlsArr)}`,
      exportName: "WrappedHLSEndpointURL",
      description: "HLS endpoint URL",
    });

    // Print MediaPackage endpoint URL (DASH)
    new CfnOutput(this, "WrappedDASHEndpointURL", {
      value: `https://${wrapper.cf.distribution.distributionDomainName}/out/v1/${Fn.select(5, dashArr)}/${Fn.select(6, dashArr)}`,
      exportName: "WrappedDASHEndpointURL",
      description: "DASH endpoint URL",
    });
  }
}
```

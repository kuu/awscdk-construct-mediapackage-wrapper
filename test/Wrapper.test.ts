import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Code } from 'aws-cdk-lib/aws-lambda';
import { Wrapper, LambdaEdge, CloudFront } from '../src';

// Stacks which use EdgeFunctions must have an explicitly set region.
const props = {
  env: {
    region: 'ap-northeast-1',
    account: '123456789012',
  },
};

test('Create LambdaEdge', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack', props);

  new LambdaEdge(stack, 'LambdaEdge', {
    code: Code.fromAsset('./test/'),
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::Lambda::Function', 1);
});

test('Create CloudFront', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack', props);

  new CloudFront(stack, 'CloudFront', {
    domainName: 'example.com',
    hlsLambdaEdge: new LambdaEdge(stack, 'HLSLambdaEdge', {
      code: Code.fromAsset('./test/'),
    }),
    dashLambdaEdge: new LambdaEdge(stack, 'DASHLambdaEdge', {
      code: Code.fromAsset('./test/'),
    }),
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::CloudFront::Distribution', 1);
});

test('Create Wrapper', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack', props);

  new Wrapper(stack, 'Wrapper', {
    domainName: 'example.com',
    hlsWrapperFunction: Code.fromAsset('./test/'),
    dashWrapperFunction: Code.fromAsset('./test/'),
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::Lambda::Function', 2);
  template.hasResource('AWS::CloudFront::Distribution', 1);
});
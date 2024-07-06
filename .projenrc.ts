import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Kuu Miyazaki',
  authorAddress: 'miyazaqui@gmail.com',
  cdkVersion: '2.148.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'awscdk-construct-mediapackage-wrapper',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/miyazaqui/awscdk-construct-mediapackage-wrapper.git',
  description: 'CDK Construct for creating wrapper Lambda@Edge functions for MediaPackage endpoints',
  keywords: [
    'cdk',
    'cdk-construct',
    'MediaPackage',
    'CloudFront',
    'Lambda@Edge',
  ],
  license: 'MIT',
  licensed: true,
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();

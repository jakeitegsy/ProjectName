import { countResources, expect as expectCDK } from '@aws-cdk/assert';
import { App, Stack } from '@aws-cdk/core';
import { InlineLambdaConstruct } from '../src';

test('Simple test', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  new InlineLambdaConstruct(stack, 'SimpleInlineLambdaConstruct');

  expectCDK(stack).to(countResources('AWS::Lambda::Function', 1));
});

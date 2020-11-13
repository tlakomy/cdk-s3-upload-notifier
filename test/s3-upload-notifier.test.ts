import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as S3UploadNotifier from '../lib/s3-upload-notifier-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new S3UploadNotifier.S3UploadNotifierStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});

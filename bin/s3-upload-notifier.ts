#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { S3UploadNotifierStack } from '../lib/s3-upload-notifier-stack';

const app = new cdk.App();
new S3UploadNotifierStack(app, 'S3UploadNotifierStack');

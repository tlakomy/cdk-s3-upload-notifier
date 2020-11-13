import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as sns from '@aws-cdk/aws-sns';
import * as s3Notifications from '@aws-cdk/aws-s3-notifications';
import * as snsSubscriptions from '@aws-cdk/aws-sns-subscriptions';

export class S3UploadNotifierStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const dataBucket = new s3.Bucket(this, 'DataBucket');
        const topic = new sns.Topic(this, 'Topic');

        dataBucket.addEventNotification(
            s3.EventType.OBJECT_CREATED,
            new s3Notifications.SnsDestination(topic),
        );

        const emailAddress = new cdk.CfnParameter(this, 'subscriptionEmail');

        topic.addSubscription(
            new snsSubscriptions.EmailSubscription(
                emailAddress.value.toString(),
            ),
        );
    }
}

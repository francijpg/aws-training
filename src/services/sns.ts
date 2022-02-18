import * as aws from 'aws-sdk';
import dotenv from 'dotenv';
import { Router } from "express";
import { Request, Response } from "express";

dotenv.config();
const router = Router();

const awsConfig: object = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  apiVersion: process.env.AWS_SNS_API_VERSION,
};

const params = {
  Message: 'Hi from AWS SNS!',
  PhoneNumber: 'one_phone_number',
};

router.get("/sns", async (req: Request, res: Response) => {

  try {
    const sns = new aws.SNS(awsConfig);
    const result = await sns.publish(params).promise();
    res.end(JSON.stringify({ MessageID: result.MessageId, statusCode: 200 }));
  } catch (error) {
    res.end(JSON.stringify({ Error: error.message, statusCode: 500 }));
  }

});

export default router;
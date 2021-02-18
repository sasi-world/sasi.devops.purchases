import * as AWS from "aws-sdk";

const client: any = new AWS.DynamoDB.DocumentClient({ region: "eu-west-1" });

export default {
  get: (params: object) => client.get(params).promise(),
  put: (params: object) => client.put(params).promise(),
  query: (params: object) => client.query(params).promise(),
  update: (params: object) => client.update(params).promise(),
  delete: (params: object) => client.delete(params).promise(),
  scan: (params: object) => client.scan(params).promise(),
};

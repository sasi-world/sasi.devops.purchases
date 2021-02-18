import * as dynamoDB from "../../libs/dynamoDB";

export const createPurchase = async (args: any, context: object) => {
  const PurchaseInput: object = {
    ...args.input,
  };
  const params = {
    TableName: process.env.PurchasesDB,
    Item: { ...PurchaseInput },
  };
};

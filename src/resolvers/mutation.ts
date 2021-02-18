import * as dynamoDB from "../../libs/dynamoDB";

export const createPurchase = async (args: any, context: object) => {
  const PurchaseInput: object = {
    ...args.purchase,
  };
  const params = {
    TableName: process.env.PurchasesDB,
    Item: { ...PurchaseInput },
  };

  try {
    const purchase = await dynamoDB.default.put(params);
    console.log(purchase);
    return purchase.Attributes;
  } catch (e) {
    throw new Error(e);
  }
};

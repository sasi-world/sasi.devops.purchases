import * as dynamoDB from "../../libs/dynamoDB";
import * as Utils from "../../libs/utils";
export const createPurchase = async (args: any, context: object) => {
  const PurchaseInput: object = {
    ...args.purchase,
  };
  const params = {
    TableName: process.env.PurchasesDB,
    Item: { ID: Utils.uuidv4(), ...PurchaseInput },
  };

  try {
    const purchase = await dynamoDB.default.put(params);
    console.log(purchase);
    return purchase.Attributes;
  } catch (e) {
    throw new Error(e);
  }
};

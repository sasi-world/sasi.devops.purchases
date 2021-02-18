import * as dynamoDB from "../../libs/dynamoDB";
import * as Utils from "../../libs/utils";
export const createPurchase = async (args: any, context: object) => {
  const PurchaseInput: object = {
    ...args.purchase,
  };
  const params = {
    TableName: process.env.PurchasesDB,
    Item: { ID: Utils.uuidv4(), dateCreated: Date.now(), ...PurchaseInput },
  };

  try {
    console.log(params);

    await dynamoDB.default.put(params);
    const Purchase = { ...params.Item };
    return Purchase;
  } catch (e) {
    throw new Error(e);
  }
};

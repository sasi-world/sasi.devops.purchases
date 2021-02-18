import * as dynamoDB from "../../libs/dynamoDB";

export const createPurchase = async (args: object, context: object) => {
  const params = {
    TableName: process.env.PurchasesDB,
  };
};

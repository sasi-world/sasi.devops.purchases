import { hello } from "./query";
import { createPurchase } from "./mutation";
import { IResolvers } from "graphql-tools/dist/Interfaces";
export const resolvers: IResolvers = {
  Query: {
    hello: (root: any, args: any, context: any) => hello(args, context),
  },
  Mutation: {
    createPurchase: (root: any, args: object, context: object) =>
      createPurchaseargs(args, context),
  },
};

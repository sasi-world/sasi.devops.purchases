const schema = `

type Photo {
     name: String
     imageURL: String
}
type Purchases {
     ID: String!
     photoID: String!
     contributorID: String!
     contributorUsername:String!
     customerEmail: String!
     photo: Photo
     dateCreated: String!
}

type PhotoInput {
     name: String
     imageURL: String
}

input PuchaseseInput {
     ID: String!
     photoID: String!
     contributorID: String!
     contributorUsername:String!
     customerEmail: String!
     photo: PhotoInput
}

"""
A hello world Query
"""
type Query {
     hello: String!
     getPurchases: [Purchases]
}


type Mutation {
     createPurchase(input: PurchaseInput!): Purchases
}
`;

export { schema };

const schema = `

type Purchases {
     ID: String!
     photoID: String!
     contributorID: String!
     contributorUsername:String!
     customerEmail: String!
     imageURL:String
     dateCreated: String!
}


"""
A hello world Query
"""
type Query {
     hello: String!
}

`;

export { schema };

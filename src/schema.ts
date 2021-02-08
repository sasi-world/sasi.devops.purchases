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


"""
A hello world Query
"""
type Query {
     hello: String!
}

`;

export { schema };

 import {ApolloServer, gql} from 'apollo-server';

 // step 01 : create the schema
 const typeDefs = gql`
    type Query {
        hello : String!
    }
 `;


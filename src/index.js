// step 01  import dependencies
import { ApolloServer , gql } from 'apollo-server';
// step 02 : create the Schema 
const typeDefs = gql`
    type Query {
        hello : String!,
        baraka : String!
    }
`;
// step 03 : create the resolvers
const resolvers = {
    Query : {
        hello : () => 'hello baraka larbi welecome to the new univers',
        baraka : () => 'baraka baraka'
    }
}

// step 04 : Intentiate the apollo server
const server = new ApolloServer({typeDefs , resolvers});

// step 05 : launch the server (# by default it will start at port 4000)
server.listen().then(({url}) => console.log(`graphql is working on port ${url}`))




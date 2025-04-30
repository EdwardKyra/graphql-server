import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { typeDefs } from "./schema"

const server = new ApolloServer({
  typeDefs
})

const {url} = await startStandaloneServer(server, {
  listen: {port: 4000}
})

server.log('Server ready at port: 4000')
// {
//   // ...etc.
//   "type": "module",
//   "scripts": {
//     "start": "node index.js"
//   }
//   // other dependencies
// }

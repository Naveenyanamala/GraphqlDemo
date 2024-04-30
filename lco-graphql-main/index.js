import express from 'express';
import schema from './schema.js'
import resolvers from './resolvers.js'

import { graphqlHTTP } from 'express-graphql';

const app = express();

app.get('/', (req, res) => {
    res.send('Up and server running')
})

const root = resolvers

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8082, () => console.log('sever running on 8082'))
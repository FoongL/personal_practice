const express = require('express');
const graphqlHTTP = require('express-graphql');
require('dotenv').config();
const app = express();
const cors = require('cors');
const path = require('path')
app.use(cors({ origin: true }));

const schema = require ('./schema/index.js')

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);
app.use(express.static(path.join(__dirname, '/public')));

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server is listening on post ${PORT}`)
})
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const app = express();

const port = process.env.PORT || 3000;

// bodyParser is needed just for POST.
const serverGraphQL = new ApolloServer({
  typeDefs,
  resolvers,
  playground: !!(process.env.NODE_ENV !== "production"),
  context: ({ req }) => ({}),
});
//apply server graphql in express
serverGraphQL.applyMiddleware({ app, cors: false });

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-oaxis.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(port);
    console.log(`🚀 Server ready at ${port}`);
  })
  .catch((err) => {
    console.log(err);
  });

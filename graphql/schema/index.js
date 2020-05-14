const { gql } = require("apollo-server-express");

module.exports = gql`
  enum ROLE {
    REPARTIDOR
    CLIENTE
  }

  type User {
    _id: ID!
    role: ROLE!
    email: String!
    name: String
    uid: String!
  }

  type Menu {
    _id: ID!
    price: Int!
    name: String
    restaurant: Restaurant
    active: Boolean!
  }

  type Message {
    _id: ID!
    user: User!
    content: String!
    active: Boolean!
    chat: Chat!
    date: String!
  }

  type Chat {
    _id: ID!

    title: String!

    date: String!
  }
  type Restaurant {
    _id: ID!
    name: String
    menus: [Menu!]!
  }

  input MenuInput {
    price: Int!
    name: String
    restaurant: String!
  }

  input RestaurantInput {
    name: String!
  }

  type Query {
    menyByRestaurant(restaurantId: String!): [Restaurant!]!
    restaurants: [Restaurant!]!
    restaurant(_id: String!): Restaurant!
  }

  type Mutation {
    createMenu(menuInput: MenuInput!): Menu
  }

  type Subscription {
    messageAdded(postId: String!): Message
  }
`;

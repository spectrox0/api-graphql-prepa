// QUERYS
const restaurantQuerys = require("./queries/restaurants");

// MUTATIONS
const restaurantMutation = require("./mutations/restaurants");

// SUBSCRIPTION

const rootResolvers = {
  Query: {
    ...restaurantQuerys,
  },
  Mutation: {
    ...restaurantMutation,
  },
  Subscription: {},
};
module.exports = rootResolvers;

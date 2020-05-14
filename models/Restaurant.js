const mongoose = require("mongoose");

const { Schema } = mongoose;

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
  },
  image: {
    public_id: {
      type: String,
      required: true
  },
  url: {
      type: String,
      required: true
  }
  },
  category: {
    type: String,
    required: [true, "Category is Required"],
  },
  description: {
    type: String,
    required: [true, "Description is Required"],
  },
  price: {
    type: Number,
    required: [true, "Price is Required"],
  },
  inventoryStock: {
    type: Number,
    required: [true, "Inventory stock is Required"],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);

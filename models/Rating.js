const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
},
  userName: {
    type: String,
    required: [true, "User is Required"],
  },
  productId: {
    type: String,
    required: [true, "Product Id is Required"],
  },
  ratingValue: {
    type: Number,
    required: [true, "Value is Required"],
  },
  comments: {
    type: String,  
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Rating", ratingSchema);

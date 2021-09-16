const { Schema, model } = require("mongoose");

const MessageSchema = Schema({
  content: {
    type: String,
    maxlength: 512,
    minlength: 1,
    required: true,
  },
  by: {
    type: String,
    required: true,
  },
},{
    timestamps:true
});


const MessageModel = model("message", MessageSchema);

module.exports = MessageModel;

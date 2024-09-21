const mongoose = require("mongoose");
// Define the Ticket schema

const  TicketSchema = new mongoose.Schema({
     title:{
      type: String,
        required:true,
     },
     description:{
      type: String,
        required:true,
     },
     status:{
      type: String,
      enum:["open","in progress","closed"],
      default:"open",
     },
     createdAt:{
      type:Date,
      default:Date.now
     },
     updatedAt:{  
      type:Date,
      default:Date.now,
     }
});

//  middleware to update the updated at field before saving

TicketSchema.pre('save', function(next) {
   this.updatedAt = Date.now();
   next();
});

// Create the Ticket model
const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;
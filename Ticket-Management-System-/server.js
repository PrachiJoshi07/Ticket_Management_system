const express =require("express");
const {PORT} = require("./config");
const { connectDB } = require("./config/database");
// const Ticket = require("./models/ticket.model");
const ticketroutes =require("./routers/ticket.router");
//! database connection

connectDB();

const app = express();

//! middlewares
app.use(express.json());


//! routes
app.use('/api/tickets',ticketroutes);


app.listen(PORT, (err) => {
    if (err) console.log("error occurred while starting server", err);
    console.log("server running on port", PORT);
});
  
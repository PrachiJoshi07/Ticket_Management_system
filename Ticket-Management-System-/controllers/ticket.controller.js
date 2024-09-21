const Ticket = require("../models/ticket.model");
const TicketSchema = require("../models/ticket.model");

// create a new ticket

exports.createTicket =async(req,res)=>{
    console.log(req.body);
    try {
        const {title,description}=req.body;
        const newTicket = new Ticket({title, description});
        await newTicket.save();
        res.status(201).json({ success: true, message: "Ticket created successfully", data: newTicket });
    } 
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            customMessage: "error while creating a ticket",
        });
    }
}

// Get all tickets

// Get all tickets
exports.getAllTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.status(200).json({ success: true, message: "Fetched All Tickets", data: tickets }); // Change status to 200
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            customMessage: "error while fetching all the tickets",
        });
    }
}


// Get one tickets by using id

exports.getOneTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id); // Corrected 'parmas' to 'params'
        if (!ticket) 
            return res.status(404).json({ success: false, message: 'Ticket not found' }); // Added success: false

        res.status(200).json({ success: true, message: "Ticket fetched successfully", data: ticket }); // Added success response
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            customMessage: "error while fetching the ticket",
        });
    }
}


// update a ticket by id

// Update a ticket by ID
exports.updateTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ticket) 
            return res.status(404).json({ success: false, message: 'Ticket not found' }); // Added success: false

        res.status(200).json({ success: true, message: "Ticket Updated", data: ticket }); // Changed status to 200
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            customMessage: "error while updating the ticket",
        });
    }
}


// Delete a ticket by id


exports.deleteTicket = async (req, res) => {
    try {
        // Find the ticket by ID and delete it
        const ticket = await Ticket.findByIdAndDelete(req.params.id);

        // If the ticket is not found, return a 404 status with an error message
        if (!ticket) {
            return res.status(404).json({
                success: false,
                message: 'Ticket not found',
            });
        }

        // If the ticket is deleted, return a success message
        res.status(200).json({
            success: true,
            message: 'Ticket deleted successfully',
        });
    } catch (error) {
        // Handle any errors and return a 500 status with error details
        res.status(500).json({
            success: false,
            message: 'Error while deleting ticket',
            error: error.message,
        });
    }
};

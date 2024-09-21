const {Router} = require("express");

const { createTicket, getAllTickets, getOneTicket, updateTicket, deleteTicket } = require("../controllers/ticket.controller");

const router = Router();
// Create a new ticket
router.post('/create', createTicket);

// Get all tickets
router.get('/tickets',getAllTickets);

// Get a single ticket by ID
router.get('/:id',getOneTicket);

// update a ticket by id
router.patch('/:id',updateTicket);

// Delete a ticket by ID
router.delete('/:id', deleteTicket);

module.exports = router;
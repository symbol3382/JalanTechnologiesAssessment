require('dotenv').config();
const {Zoo} = require("./models/Zoo");

class Main {
    /**
     * @description The init method for the application to start processing the single user group tickets.
     */
    init() {
        const zoo = new Zoo();
        zoo.processTickets();
        console.log("-----------------------------------------------------------");
        console.log(`Total cost: ${zoo.calculateTotalCost()}`)
        console.log("-----------------------------------------------------------");
        zoo.displayTicket();
    }
}

(new Main()).init();
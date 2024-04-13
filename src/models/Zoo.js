const readline = require("readline-sync");
const {Lang} = require("../lang");
const {Ticket} = require("./Ticket");
const console = require("console");

class Zoo {
    /**
     * @description As the one zoo system can have multiple tickets so this variable will hold the tickets.
     *
     * @type {Ticket[]}
     */
    #tickets = [];

    constructor() {
        this.messages = Lang.getMessage();
    }

    /**
     * @description To start taking input from the user and prepare the tickets on the basis of the user input
     */
    processTickets() {
        let ticketsCount = readline.questionInt(this.messages['enter-number-of-tickets']);
        let ticketIndex = 0;
        // taking the N tickets provided by the user
        while (ticketIndex < ticketsCount) {
            console.log(`------------------ Enter guest ${ticketIndex+1} details ------------------`)
            let guestName = this.#fetchGuestName();
            let guestAge = this.#fetchGuestAge();
            this.#tickets.push(new Ticket(guestName, guestAge));
            ticketIndex++;
        }
    }

    /**
     * @description To calculate the total cost of the tickets in the zoo single system. As user should be capable to
     * purchase the multiple tickets so Zoo system will carry the single user group tickets.
     *
     * @returns {number}
     */
    calculateTotalCost() {
        let totalCost = 0;
        this.#tickets.forEach(ticket => {
            totalCost += ticket.cost;
        })
        return totalCost;
    }

    /**
     * @description For the validation purpose this method provides the data of tickets in presented form
     * @output Each line contains
     *      <Guest Name> (age: <age>)
     */
    displayTicket() {
        this.#tickets.forEach(ticket => {
            console.log(`${ticket.userName} (age: ${ticket.userAge})`);
        })
    }

    /**
     * @private
     *
     * @description This private methods take the input for the username until user provides the name with defined
     * set of rules
     */
    #fetchGuestName() {
        let guestName;
        // until user provides the valid name keep taking input for the user and return it.
        while (!guestName) {
            guestName = readline.question(this.messages['enter-guest-name']);
            if (guestName) {
                return guestName;
            } else {
                console.log("Guest name can not be empty");
            }
        }
    }

    /**
     * @description To take the user age as input until user provides the validated data
     * defined by the rules for the age.
     * @returns {*}
     */
    #fetchGuestAge() {
        let age;
        // until user provides the correct input keep asking for the age
        while(!age) {
            age = readline.questionInt(this.messages['enter-guest-age']);
            if(Number.isInteger(age) && age > 0) {
                return age;
            } else {
                console.log("Age must be a valid non-zero number");
            }
        }
    }
}

module.exports = {
    Zoo,
}
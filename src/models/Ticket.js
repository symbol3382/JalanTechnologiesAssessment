const costs = require('../config/cost.json')

class Ticket {
    #userName;
    #userAge;
    #cost;

    get cost() {
        return this.#cost;
    }

    get userName() {
        return this.#userName;
    }

    get userAge() {
        return this.#userAge;
    }

    constructor(userName, userAge) {
        this.#userName = userName;
        this.#userAge = userAge;
        this.#cost = this.#calculateCost();
    }

    /**
     * @description To calculate the cost of the ticket.
     * @algo
     *  -   As the ticket cost is related to user age
     *  -   Fetching the cost chart
     *  -   On the basis of the min age the cost can be calculated because
     *  -   Min age is taken as base value because the max age should have no limit.
     * @returns {number|*}
     */
    #calculateCost() {
        for(let chart of costs) {
            if(this.#userAge >= chart.minAge){
                // found the user age group so instantly return the cost, no need to check the further.
                return chart.cost;
            }
        }
        return 0;
    }
}

module.exports = {
    Ticket
}
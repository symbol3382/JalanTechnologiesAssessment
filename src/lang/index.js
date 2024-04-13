const messages = require('./message.json');

class Lang {
    static lang = process.env.NODE_APP_LANG;

    /**
     * @description To get the application message that can be displayed to user, to add a new language support
     * add the message data in message.json file with specific language to be added
     * @returns {*}
     */
    static getMessage() {
        if (!messages[this.lang]) {
            throw new Error("Invalid language configured")
        }
        return messages[this.lang];
    }
}

module.exports = {
    Lang
}
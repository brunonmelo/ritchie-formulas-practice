const clc = require("cli-color")


function Run(user, email) {
    const credentials = {
        user, email
    }
    console.log('Github credentials:')
    console.log(credentials)
}

const formula = Run
module.exports = formula

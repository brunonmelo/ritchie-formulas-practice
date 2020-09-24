const clc = require("cli-color")


function Run(profile, profileTools) {
    console.log("Selected profiles")
    console.log(clc.green(`You selected profile: ${profile}`));
    console.log(clc.green(`You selected tools: ${profileTools}`));
}

const formula = Run
module.exports = formula

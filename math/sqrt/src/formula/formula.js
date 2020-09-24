const clc = require("cli-color")


function Run(input1) {
    const result = Number(input1) * Number(input1)
    if(isNaN(result)) {
        console.error(clc.red("value must be a number"))
    } else {
        console.log("Square root value!")
        console.log(`${input1} = ${result}`)
    }
}

const formula = Run
module.exports = formula

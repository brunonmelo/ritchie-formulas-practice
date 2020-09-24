const clc = require("cli-color")


function Run(input1, input2) {
    const result = Number(input1) - Number(input2)
    if(isNaN(result)) {
        console.error(clc.red("value must be a number"))
    } else {
        console.log("minus values!")
        console.log(`${input1} - ${input2} = ${result}`)
    }
}

const formula = Run
module.exports = formula

const clc = require("cli-color");
const axios = require("axios").default;

function Run(cep) {
  console.log(`Address for cep: ${cep}`);

  axios
    .get(`http://viacep.com.br/ws/${cep}/json/`)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      const response = error.response
      clc.red(console.error(`Error on get address: ${response.status} / ${response.statusText}`));
    })
}

const formula = Run;
module.exports = formula;

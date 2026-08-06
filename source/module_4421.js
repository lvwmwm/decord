// Module ID: 4421
// Function ID: 4422
// Dependencies: [624, 625, 4422]

// Module 4421
const tmp = require("_process") && require("_process").isSet;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsSet");
}

export default _module;

// Module ID: 4263
// Function ID: 37381
// Dependencies: [608, 609, 4264]

// Module 4263
const tmp = require("_process") && require("_process").isSet;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsSet");
}

export default _module;

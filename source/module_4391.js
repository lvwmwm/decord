// Module ID: 4391
// Function ID: 4392
// Dependencies: [624, 625, 4392]

// Module 4391
const tmp = require("_process") && require("_process").isSet;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsSet");
}

export default _module;

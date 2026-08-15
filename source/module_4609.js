// Module ID: 4609
// Function ID: 4610
// Dependencies: [624, 625, 4610]

// Module 4609
const tmp = require("_process") && require("_process").isSet;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsSet");
}

export default _module;

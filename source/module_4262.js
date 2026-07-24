// Module ID: 4262
// Function ID: 37370
// Dependencies: [608, 609, 4263]

// Module 4262
const tmp = require("_process") && require("_process").isSet;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsSet");
}

export default _module;

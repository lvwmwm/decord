// Module ID: 4330
// Function ID: 4331
// Dependencies: [624, 625, 4331]

// Module 4330
const tmp = require("_process") && require("_process").isSet;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsSet");
}

export default _module;

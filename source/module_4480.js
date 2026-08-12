// Module ID: 4480
// Function ID: 4481
// Dependencies: [624, 625, 4481]

// Module 4480
const tmp = require("_process") && require("_process").isSet;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsSet");
}

export default _module;

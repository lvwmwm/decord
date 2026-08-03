// Module ID: 4392
// Function ID: 4393
// Dependencies: [624, 625, 4393]

// Module 4392
const tmp = require("_process") && require("_process").isSet;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsSet");
}

export default _module;

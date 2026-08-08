// Module ID: 4440
// Function ID: 4441
// Dependencies: [624, 625, 4441]

// Module 4440
const tmp = require("_process") && require("_process").isSet;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsSet");
}

export default _module;

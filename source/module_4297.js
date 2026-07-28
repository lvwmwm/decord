// Module ID: 4297
// Function ID: 37494
// Dependencies: [608, 609, 4298]

// Module 4297
const tmp = require("_process") && require("_process").isSet;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsSet");
}

export default _module;

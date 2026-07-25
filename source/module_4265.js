// Module ID: 4265
// Function ID: 37384
// Dependencies: [608, 609, 4266]

// Module 4265
const tmp = require("_process") && require("_process").isMap;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsMap");
}

export default _module;

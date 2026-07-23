// Module ID: 4264
// Function ID: 37372
// Dependencies: [608, 609, 4265]

// Module 4264
const tmp = require("_process") && require("_process").isMap;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsMap");
}

export default _module;

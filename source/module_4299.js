// Module ID: 4299
// Function ID: 37497
// Dependencies: [608, 609, 4300]

// Module 4299
const tmp = require("_process") && require("_process").isMap;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsMap");
}

export default _module;

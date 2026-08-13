// Module ID: 4483
// Function ID: 4484
// Dependencies: [624, 625, 4484]

// Module 4483
const tmp = require("_process") && require("_process").isMap;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsMap");
}

export default _module;

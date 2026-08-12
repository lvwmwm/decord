// Module ID: 4482
// Function ID: 4483
// Dependencies: [624, 625, 4483]

// Module 4482
const tmp = require("_process") && require("_process").isMap;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsMap");
}

export default _module;

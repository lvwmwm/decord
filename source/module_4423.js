// Module ID: 4423
// Function ID: 4424
// Dependencies: [624, 625, 4424]

// Module 4423
const tmp = require("_process") && require("_process").isMap;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsMap");
}

export default _module;

// Module ID: 4332
// Function ID: 4333
// Dependencies: [624, 625, 4333]

// Module 4332
const tmp = require("_process") && require("_process").isMap;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsMap");
}

export default _module;

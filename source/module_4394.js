// Module ID: 4394
// Function ID: 4395
// Dependencies: [624, 625, 4395]

// Module 4394
const tmp = require("_process") && require("_process").isMap;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsMap");
}

export default _module;

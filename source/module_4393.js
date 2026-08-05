// Module ID: 4393
// Function ID: 4394
// Dependencies: [624, 625, 4394]

// Module 4393
const tmp = require("_process") && require("_process").isMap;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsMap");
}

export default _module;

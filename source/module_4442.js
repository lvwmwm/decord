// Module ID: 4442
// Function ID: 4443
// Dependencies: [624, 625, 4443]

// Module 4442
const tmp = require("_process") && require("_process").isMap;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsMap");
}

export default _module;

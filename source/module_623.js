// Module ID: 623
// Function ID: 624
// Dependencies: [624, 625, 626]

// Module 623
const tmp = require("_process") && require("_process").isTypedArray;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsTypedArray");
}

export default _module;

// Module ID: 607
// Function ID: 7043
// Dependencies: [608, 609, 610]

// Module 607
const tmp = require("_process") && require("_process").isTypedArray;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsTypedArray");
}

export default _module;

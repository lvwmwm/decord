// Module ID: 4328
// Function ID: 4329
// Dependencies: [624, 625, 4329]

// Module 4328
const tmp = require("_process") && require("_process").isMap;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsMap");
}

export default _module;

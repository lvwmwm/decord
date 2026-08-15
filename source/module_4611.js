// Module ID: 4611
// Function ID: 4612
// Dependencies: [624, 625, 4612]

// Module 4611
const tmp = require("_process") && require("_process").isMap;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsMap");
}

export default _module;

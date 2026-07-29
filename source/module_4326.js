// Module ID: 4326
// Function ID: 4327
// Dependencies: [624, 625, 4327]

// Module 4326
const tmp = require("_process") && require("_process").isSet;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsSet");
}

export default _module;

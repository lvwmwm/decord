// Module ID: 4438
// Function ID: 4439
// Dependencies: [624, 625, 4439]

// Module 4438
const tmp = require("_process") && require("_process").isSet;
if (tmp) {
  let _module = require("baseUnary")(tmp);
} else {
  _module = require("baseIsSet");
}

export default _module;

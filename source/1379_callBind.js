// Module ID: 1379
// Function ID: 16528
// Name: callBind
// Dependencies: [528, 1380, 541, 1383]

// Module 1379 (callBind)
if (require("module_541")) {
  const obj = {};
  const _module = require("module_541");
  obj.value = require("applyBind");
  _module(module.exports, "apply", obj);
} else {
  module.exports.apply = require("applyBind");
}

export default function callBind(arg0) {
  let num = 0;
  const diff = arg0.length - (arguments.length - 1);
  const tmp = require(528) /* callBindBasic */(arguments);
  if (diff > 0) {
    num = diff;
  }
  return require(1380) /* setFunctionLength */(tmp, 1 + num, true);
};

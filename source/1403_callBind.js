// Module ID: 1403
// Function ID: 1404
// Name: callBind
// Dependencies: [551, 1404, 564, 1407]

// Module 1403 (callBind)
if (require("flag")) {
  const obj = { value: null };
  const _module = require("flag");
  obj[0] = require("applyBind");
  _module(module.exports, "apply", obj);
} else {
  module.exports.apply = require("applyBind");
}

export default function callBind(arg0) {
  const diff = arg0.length - (arguments.length - 1);
  let num = 0;
  const tmp = require(551) /* callBindBasic */(arguments);
  if (0 < diff) {
    num = diff;
  }
  return require(1404) /* setFunctionLength */(tmp, 1 + num, true);
};

// Module ID: 1379
// Function ID: 16526
// Name: callBind
// Dependencies: []

// Module 1379 (callBind)
if (require(dependencyMap[2])) {
  const obj = {};
  const _module = require(dependencyMap[2]);
  obj.value = require(dependencyMap[3]);
  _module(module.exports, "apply", obj);
} else {
  module.exports.apply = require(dependencyMap[3]);
}

export default function callBind(arg0) {
  let num = 0;
  const diff = arg0.length - (arguments.length - 1);
  const tmp = require(dependencyMap[0])(arguments);
  if (diff > 0) {
    num = diff;
  }
  return require(dependencyMap[1])(tmp, 1 + num, true);
};

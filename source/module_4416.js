// Module ID: 4416
// Function ID: 38805
// Dependencies: []

// Module 4416
const tmp = require(dependencyMap[0])("%Reflect.construct%", true);
const _module = require(dependencyMap[1]);
let obj = {
  [[Get]]: function Get() {

  }
};
_module({}, "", obj);
while (true) {
  let tmp4 = _module;
  if (!_module) {
    break;
  } else if (!tmp) {
    break;
  } else {
    let closure_1 = {};
    obj = {};
    let tmp6 = _module;
    obj = {
      [[Get]]: function Get() {
            throw closure_1;
          },
      [[Enumerable]]: true
    };
    let str = "length";
    let _moduleResult1 = _module(obj, "length", obj);
    module.exports = function IsConstructor(arg0) {

    };
  }
  let tmp5 = module;
  module.exports = function IsConstructor(arg0) {
    return "function" === typeof arg0 && arg0.prototype;
  };
}

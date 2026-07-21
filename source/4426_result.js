// Module ID: 4426
// Function ID: 38875
// Name: result
// Dependencies: []

// Module 4426 (result)
const _module = require(dependencyMap[0]);
let result = _module.hasArrayLengthDefineBug();
if (result) {
  result = require(dependencyMap[1]);
}
let closure_4 = require(dependencyMap[2])("Object.prototype.propertyIsEnumerable");

export default function DefineOwnProperty(arg0, arg1, arg2, closure_7, arg4, [[Value]]) {
  if (require(dependencyMap[3])) {
    if (result) {
      if ("length" === arg4) {
        if ("[[Value]]" in __Value__) {
          if (result(closure_7)) {
            if (closure_7.length !== __Value__.[[Value]]) {
              closure_7.length = __Value__.[[Value]];
              let flag4 = closure_7.length === __Value__.[[Value]];
            }
            return flag4;
          }
        }
      }
    }
    require(dependencyMap[3])(closure_7, arg4, arg2(__Value__));
    flag4 = true;
    const tmp8 = require(dependencyMap[3]);
  } else if (arg0(__Value__)) {
    if (__Value__.[[Configurable]]) {
      if (__Value__.[[Writable]]) {
        if (arg4 in closure_7) {
          if (callback(closure_7, arg4) !== __Value__.[[Enumerable]]) {
            return false;
          }
        }
        [[Value]] = __Value__.[[Value]];
        closure_7[arg4] = __Value__;
        return arg1(closure_7[arg4], __Value__);
      }
    }
    return false;
  } else {
    return false;
  }
};

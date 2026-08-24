// Module ID: 13769
// Function ID: 13770
// Name: getOwnPropertyDescriptor
// Dependencies: []

// Module 13769 (getOwnPropertyDescriptor)
let propertyIsEnumerable = {}.propertyIsEnumerable;
if (!getOwnPropertyDescriptor) {
  if (getOwnPropertyDescriptor) {
    propertyIsEnumerable = function propertyIsEnumerable(SymbolResult) {
      const tmp = getOwnPropertyDescriptor(this, SymbolResult);
      return tmp && tmp.enumerable;
    };
  }
  arg5.f = propertyIsEnumerable;
} else {
  const call = propertyIsEnumerable.call;
  if (typeof call === "unknown") {
    let propertyIsEnumerableResult = require("module_1");
  } else {
    propertyIsEnumerableResult = call(obj, 1);
  }
  obj = { 1: 2 };
}

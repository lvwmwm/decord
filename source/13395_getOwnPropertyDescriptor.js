// Module ID: 13395
// Function ID: 13396
// Name: getOwnPropertyDescriptor
// Dependencies: []

// Module 13395 (getOwnPropertyDescriptor)
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

// Module ID: 14656
// Function ID: 14657
// Dependencies: []

// Module 14656
let propertyIsEnumerable = {}.propertyIsEnumerable;
if (!getOwnPropertyDescriptor) {
  if (getOwnPropertyDescriptor) {
    propertyIsEnumerable = function propertyIsEnumerable(ownPropertySymbols) {
      const tmp = getOwnPropertyDescriptor(this, ownPropertySymbols);
      return tmp && tmp.enumerable;
    };
  }
  arg5.f = propertyIsEnumerable;
} else {
  const call = propertyIsEnumerable.call;
  if (typeof call === "unknown") {
    let propertyIsEnumerableResult = propertyIsEnumerable(1);
  } else {
    propertyIsEnumerableResult = call(obj, 1);
  }
  obj = { 1: 2 };
}

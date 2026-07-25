// Module ID: 13332
// Function ID: 102184
// Name: getOwnPropertyDescriptor
// Dependencies: []

// Module 13332 (getOwnPropertyDescriptor)
let propertyIsEnumerable = {}.propertyIsEnumerable;
if (getOwnPropertyDescriptor) {
  const obj = {};
  obj[1] = 2;
  getOwnPropertyDescriptor = !propertyIsEnumerable.call(obj, 1);
}
if (getOwnPropertyDescriptor) {
  propertyIsEnumerable = function propertyIsEnumerable(arg0) {
    const tmp = getOwnPropertyDescriptor(this, arg0);
    let enumerable = !tmp2;
    if (!!tmp) {
      enumerable = tmp.enumerable;
    }
    return enumerable;
  };
}
arg5.f = propertyIsEnumerable;

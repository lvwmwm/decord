// Module ID: 13154
// Function ID: 99574
// Name: getOwnPropertyDescriptor
// Dependencies: []

// Module 13154 (getOwnPropertyDescriptor)
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

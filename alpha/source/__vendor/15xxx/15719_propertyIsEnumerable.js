// Module ID: 15719
// Function ID: 15720
// Name: propertyIsEnumerable
// Dependencies: []

// Module 15719 (propertyIsEnumerable)
let propertyIsEnumerable = {}.propertyIsEnumerable;
const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor && !propertyIsEnumerable.call({ 1: 2 }, 1);
if (getOwnPropertyDescriptor) {
  propertyIsEnumerable = function propertyIsEnumerable(arg0) {
    const tmp = getOwnPropertyDescriptor(this, arg0);
    return tmp && tmp.enumerable;
  };
}

export const f = propertyIsEnumerable;

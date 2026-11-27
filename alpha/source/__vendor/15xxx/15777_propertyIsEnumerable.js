// Module ID: 15777
// Function ID: 15778
// Name: propertyIsEnumerable
// Dependencies: []

// Module 15777 (propertyIsEnumerable)
let propertyIsEnumerable = {}.propertyIsEnumerable;
const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor && !propertyIsEnumerable.call({ 1: 2 }, 1);
if (getOwnPropertyDescriptor) {
  propertyIsEnumerable = function propertyIsEnumerable(arg0) {
    const tmp = getOwnPropertyDescriptor(this, arg0);
    return tmp && tmp.enumerable;
  };
}

export const f = propertyIsEnumerable;

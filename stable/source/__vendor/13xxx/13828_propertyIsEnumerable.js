// Module ID: 13828
// Function ID: 13829
// Name: propertyIsEnumerable
// Dependencies: []

// Module 13828 (propertyIsEnumerable)
let propertyIsEnumerable = {}.propertyIsEnumerable;
const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor && !propertyIsEnumerable.call({ 1: 2 }, 1);
if (getOwnPropertyDescriptor) {
  propertyIsEnumerable = function propertyIsEnumerable(arg0) {
    const tmp = getOwnPropertyDescriptor(this, arg0);
    return tmp && tmp.enumerable;
  };
}

export const f = propertyIsEnumerable;

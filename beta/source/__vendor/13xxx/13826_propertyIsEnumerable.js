// Module ID: 13826
// Function ID: 13827
// Name: propertyIsEnumerable
// Dependencies: []

// Module 13826 (propertyIsEnumerable)
let propertyIsEnumerable = {}.propertyIsEnumerable;
const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor && !propertyIsEnumerable.call({ 1: 2 }, 1);
if (getOwnPropertyDescriptor) {
  propertyIsEnumerable = function propertyIsEnumerable(arg0) {
    const tmp = getOwnPropertyDescriptor(this, arg0);
    return tmp && tmp.enumerable;
  };
}

export const f = propertyIsEnumerable;

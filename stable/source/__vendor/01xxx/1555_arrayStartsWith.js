// Module ID: 1555
// Function ID: 1556
// Name: arrayStartsWith
// Dependencies: []
// Exports: arrayStartsWith

// Module 1555 (arrayStartsWith)

export const arrayStartsWith = function arrayStartsWith(routeNames, routeNames2) {
  const tmp = routeNames2.length <= routeNames.length && routeNames2.every((item, index) => item === routeNames[index]);
  return tmp;
};

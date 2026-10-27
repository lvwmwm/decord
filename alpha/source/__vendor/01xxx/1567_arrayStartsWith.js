// Module ID: 1567
// Function ID: 1568
// Name: arrayStartsWith
// Dependencies: []
// Exports: arrayStartsWith

// Module 1567 (arrayStartsWith)

export const arrayStartsWith = function arrayStartsWith(routeNames, routeNames2) {
  const tmp = routeNames2.length <= routeNames.length && routeNames2.every((item, index) => item === routeNames[index]);
  return tmp;
};

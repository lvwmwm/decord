// Module ID: 1570
// Function ID: 1571
// Name: arrayStartsWith
// Dependencies: []
// Exports: arrayStartsWith

// Module 1570 (arrayStartsWith)

export const arrayStartsWith = function arrayStartsWith(routeNames, routeNames2) {
  const tmp = routeNames2.length <= routeNames.length && routeNames2.every((item, index) => item === routeNames[index]);
  return tmp;
};

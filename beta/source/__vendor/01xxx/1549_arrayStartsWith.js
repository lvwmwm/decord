// Module ID: 1549
// Function ID: 1550
// Name: arrayStartsWith
// Dependencies: []
// Exports: arrayStartsWith

// Module 1549 (arrayStartsWith)

export const arrayStartsWith = function arrayStartsWith(routeNames, routeNames2) {
  closure_0 = routeNames;
  return routeNames2.length <= routeNames.length && routeNames2.every((item, index) => item === closure_0[index]);
};

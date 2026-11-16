// Module ID: 1564
// Function ID: 1565
// Name: arrayStartsWith
// Dependencies: []
// Exports: arrayStartsWith

// Module 1564 (arrayStartsWith)

export function arrayStartsWith(routeNames, routeNames2) {
  const tmp = routeNames2.length <= routeNames.length && routeNames2.every((item, index) => item === routeNames[index]);
  return tmp;
}

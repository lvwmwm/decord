// Module ID: 1563
// Function ID: 1564
// Name: arrayStartsWith
// Dependencies: []
// Exports: arrayStartsWith

// Module 1563 (arrayStartsWith)

export function arrayStartsWith(routeNames, routeNames2) {
  const tmp = routeNames2.length <= routeNames.length && routeNames2.every((item, index) => item === routeNames[index]);
  return tmp;
}

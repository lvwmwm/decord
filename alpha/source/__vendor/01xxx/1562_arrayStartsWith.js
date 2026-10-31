// Module ID: 1562
// Function ID: 1563
// Name: arrayStartsWith
// Dependencies: []
// Exports: arrayStartsWith

// Module 1562 (arrayStartsWith)

export function arrayStartsWith(routeNames, routeNames2) {
  const tmp = routeNames2.length <= routeNames.length && routeNames2.every((item, index) => item === routeNames[index]);
  return tmp;
}

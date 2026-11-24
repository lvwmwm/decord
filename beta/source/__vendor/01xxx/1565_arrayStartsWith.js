// Module ID: 1565
// Function ID: 1566
// Name: arrayStartsWith
// Dependencies: []
// Exports: arrayStartsWith

// Module 1565 (arrayStartsWith)

export function arrayStartsWith(routeNames, routeNames2) {
  const tmp = routeNames2.length <= routeNames.length && routeNames2.every((item, index) => item === routeNames[index]);
  return tmp;
}

// Module ID: 4553
// Function ID: 4554
// Name: getPolyfill
// Dependencies: [4554, 4555]

// Module 4553 (getPolyfill)

export default function getPolyfill() {
  if (!require(4554) /* properlyBoxed */(map)) {
    map = require(4555) /* map */;
  }
  return map;
};

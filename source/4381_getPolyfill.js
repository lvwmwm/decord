// Module ID: 4381
// Function ID: 38812
// Name: getPolyfill
// Dependencies: [4382, 4383]

// Module 4381 (getPolyfill)

export default function getPolyfill() {
  if (!require(4382) /* properlyBoxed */(map)) {
    map = require(4383) /* map */;
  }
  return map;
};

// Module ID: 4504
// Function ID: 4505
// Name: getPolyfill
// Dependencies: [4505, 4506]

// Module 4504 (getPolyfill)

export default function getPolyfill() {
  if (!require(4505) /* properlyBoxed */(map)) {
    map = require(4506) /* map */;
  }
  return map;
};

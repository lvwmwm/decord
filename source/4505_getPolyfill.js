// Module ID: 4505
// Function ID: 4506
// Name: getPolyfill
// Dependencies: [4506, 4507]

// Module 4505 (getPolyfill)

export default function getPolyfill() {
  if (!require(4506) /* properlyBoxed */(map)) {
    map = require(4507) /* map */;
  }
  return map;
};

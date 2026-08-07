// Module ID: 4551
// Function ID: 4552
// Name: getPolyfill
// Dependencies: [4552, 4553]

// Module 4551 (getPolyfill)

export default function getPolyfill() {
  if (!require(4552) /* properlyBoxed */(map)) {
    map = require(4553) /* map */;
  }
  return map;
};

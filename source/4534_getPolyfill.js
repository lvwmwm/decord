// Module ID: 4534
// Function ID: 4535
// Name: getPolyfill
// Dependencies: [4535, 4536]

// Module 4534 (getPolyfill)

export default function getPolyfill() {
  if (!require(4535) /* properlyBoxed */(map)) {
    map = require(4536) /* map */;
  }
  return map;
};

// Module ID: 4439
// Function ID: 4440
// Name: getPolyfill
// Dependencies: [4440, 4441]

// Module 4439 (getPolyfill)

export default function getPolyfill() {
  if (!require(4440) /* properlyBoxed */(map)) {
    map = require(4441) /* map */;
  }
  return map;
};

// Module ID: 4382
// Function ID: 38824
// Name: getPolyfill
// Dependencies: [4383, 4384]

// Module 4382 (getPolyfill)

export default function getPolyfill() {
  if (!require(4383) /* properlyBoxed */(map)) {
    map = require(4384) /* map */;
  }
  return map;
};

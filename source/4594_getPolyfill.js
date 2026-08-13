// Module ID: 4594
// Function ID: 4595
// Name: getPolyfill
// Dependencies: [4595, 4596]

// Module 4594 (getPolyfill)

export default function getPolyfill() {
  if (!require(4595) /* properlyBoxed */(map)) {
    map = require(4596) /* map */;
  }
  return map;
};

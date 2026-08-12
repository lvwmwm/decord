// Module ID: 4593
// Function ID: 4594
// Name: getPolyfill
// Dependencies: [4594, 4595]

// Module 4593 (getPolyfill)

export default function getPolyfill() {
  if (!require(4594) /* properlyBoxed */(map)) {
    map = require(4595) /* map */;
  }
  return map;
};

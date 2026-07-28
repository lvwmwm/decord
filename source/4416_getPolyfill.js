// Module ID: 4416
// Function ID: 38938
// Name: getPolyfill
// Dependencies: [4417, 4418]

// Module 4416 (getPolyfill)

export default function getPolyfill() {
  if (!require(4417) /* properlyBoxed */(map)) {
    map = require(4418) /* map */;
  }
  return map;
};

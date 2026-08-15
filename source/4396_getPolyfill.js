// Module ID: 4396
// Function ID: 4397
// Name: getPolyfill
// Dependencies: [4397, 4398]

// Module 4396 (getPolyfill)

export default function getPolyfill() {
  if (!require(4397) /* properlyBoxed */(map)) {
    map = require(4398) /* map */;
  }
  return map;
};

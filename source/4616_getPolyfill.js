// Module ID: 4616
// Function ID: 4617
// Name: getPolyfill
// Dependencies: [4617, 4618]

// Module 4616 (getPolyfill)

export default function getPolyfill() {
  if (!require(4617) /* properlyBoxed */(map)) {
    map = require(4618) /* map */;
  }
  return map;
};

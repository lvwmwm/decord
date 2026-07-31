// Module ID: 4443
// Function ID: 4444
// Name: getPolyfill
// Dependencies: [4444, 4445]

// Module 4443 (getPolyfill)

export default function getPolyfill() {
  if (!require(4444) /* properlyBoxed */(map)) {
    map = require(4445) /* map */;
  }
  return map;
};

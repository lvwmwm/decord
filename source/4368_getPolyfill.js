// Module ID: 4368
// Function ID: 38742
// Name: getPolyfill
// Dependencies: []

// Module 4368 (getPolyfill)

export default function getPolyfill() {
  require(dependencyMap[0])();
  if ("function" === typeof Promise.allSettled) {
  } else {
    allSettled = require(dependencyMap[1]);
  }
  return allSettled;
};

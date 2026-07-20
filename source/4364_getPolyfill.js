// Module ID: 4364
// Function ID: 38694
// Name: getPolyfill
// Dependencies: []

// Module 4364 (getPolyfill)

export default function getPolyfill() {
  require(dependencyMap[0])();
  if ("function" === typeof Promise.allSettled) {
  } else {
    allSettled = require(dependencyMap[1]);
  }
  return allSettled;
};

// Module ID: 4377
// Function ID: 38779
// Name: getPolyfill
// Dependencies: []

// Module 4377 (getPolyfill)

export default function getPolyfill() {
  if (!require(dependencyMap[0])(map)) {
    map = require(dependencyMap[1]);
  }
  return map;
};

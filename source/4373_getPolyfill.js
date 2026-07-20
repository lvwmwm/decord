// Module ID: 4373
// Function ID: 38715
// Name: getPolyfill
// Dependencies: []

// Module 4373 (getPolyfill)

export default function getPolyfill() {
  if (!require(dependencyMap[0])(map)) {
    map = require(dependencyMap[1]);
  }
  return map;
};

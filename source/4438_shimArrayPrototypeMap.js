// Module ID: 4438
// Function ID: 38852
// Name: shimArrayPrototypeMap
// Dependencies: []

// Module 4438 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = require(dependencyMap[0])();
  const require = tmp;
  require(dependencyMap[1])(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== tmp;
    }
  });
  return tmp;
};

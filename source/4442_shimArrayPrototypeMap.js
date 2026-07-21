// Module ID: 4442
// Function ID: 38900
// Name: shimArrayPrototypeMap
// Dependencies: []

// Module 4442 (shimArrayPrototypeMap)

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

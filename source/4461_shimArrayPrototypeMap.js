// Module ID: 4461
// Function ID: 4462
// Name: shimArrayPrototypeMap
// Dependencies: [4396, 4415]

// Module 4461 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = require(4396) /* getPolyfill */();
  require = tmp;
  require(4415) /* defineProperty */(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

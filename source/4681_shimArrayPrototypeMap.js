// Module ID: 4681
// Function ID: 4682
// Name: shimArrayPrototypeMap
// Dependencies: [4616, 4635]

// Module 4681 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = require(4616) /* getPolyfill */();
  require = tmp;
  require(4635) /* defineProperty */(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

// Module ID: 4616
// Function ID: 4617
// Name: shimArrayPrototypeMap
// Dependencies: [4551, 4570]

// Module 4616 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = require(4551) /* getPolyfill */();
  require = tmp;
  require(4570) /* defineProperty */(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

// Module ID: 4659
// Function ID: 4660
// Name: shimArrayPrototypeMap
// Dependencies: [4594, 4613]

// Module 4659 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = require(4594) /* getPolyfill */();
  require = tmp;
  require(4613) /* defineProperty */(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

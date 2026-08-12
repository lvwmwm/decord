// Module ID: 4658
// Function ID: 4659
// Name: shimArrayPrototypeMap
// Dependencies: [4593, 4612]

// Module 4658 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = require(4593) /* getPolyfill */();
  require = tmp;
  require(4612) /* defineProperty */(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

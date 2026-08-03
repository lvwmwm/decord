// Module ID: 4570
// Function ID: 4571
// Name: shimArrayPrototypeMap
// Dependencies: [4505, 4524]

// Module 4570 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = require(4505) /* getPolyfill */();
  require = tmp;
  require(4524) /* defineProperty */(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

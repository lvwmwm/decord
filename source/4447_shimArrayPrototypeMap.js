// Module ID: 4447
// Function ID: 38961
// Name: shimArrayPrototypeMap
// Dependencies: [4382, 4401]

// Module 4447 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = require(4382) /* getPolyfill */();
  require = tmp;
  require(4401) /* defineProperty */(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

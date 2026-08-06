// Module ID: 4599
// Function ID: 4600
// Name: shimArrayPrototypeMap
// Dependencies: [4534, 4553]

// Module 4599 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = require(4534) /* getPolyfill */();
  require = tmp;
  require(4553) /* defineProperty */(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

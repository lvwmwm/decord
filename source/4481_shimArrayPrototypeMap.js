// Module ID: 4481
// Function ID: 39075
// Name: shimArrayPrototypeMap
// Dependencies: [4416, 4435]

// Module 4481 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = require(4416) /* getPolyfill */();
  require = tmp;
  require(4435) /* defineProperty */(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

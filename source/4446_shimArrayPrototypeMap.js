// Module ID: 4446
// Function ID: 38948
// Name: shimArrayPrototypeMap
// Dependencies: [4381, 4400]

// Module 4446 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = require(4381) /* getPolyfill */();
  require = tmp;
  require(4400) /* defineProperty */(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

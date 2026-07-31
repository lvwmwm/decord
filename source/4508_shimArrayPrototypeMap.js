// Module ID: 4508
// Function ID: 4509
// Name: shimArrayPrototypeMap
// Dependencies: [4443, 4462]

// Module 4508 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = require(4443) /* getPolyfill */();
  require = tmp;
  require(4462) /* defineProperty */(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

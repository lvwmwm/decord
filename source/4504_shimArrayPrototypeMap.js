// Module ID: 4504
// Function ID: 4505
// Name: shimArrayPrototypeMap
// Dependencies: [4439, 4458]

// Module 4504 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = require(4439) /* getPolyfill */();
  require = tmp;
  require(4458) /* defineProperty */(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

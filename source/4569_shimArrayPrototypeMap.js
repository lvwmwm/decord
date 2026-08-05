// Module ID: 4569
// Function ID: 4570
// Name: shimArrayPrototypeMap
// Dependencies: [4504, 4523]

// Module 4569 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = require(4504) /* getPolyfill */();
  require = tmp;
  require(4523) /* defineProperty */(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

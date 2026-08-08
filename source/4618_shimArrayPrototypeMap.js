// Module ID: 4618
// Function ID: 4619
// Name: shimArrayPrototypeMap
// Dependencies: [4553, 4572]

// Module 4618 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = require(4553) /* getPolyfill */();
  require = tmp;
  require(4572) /* defineProperty */(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

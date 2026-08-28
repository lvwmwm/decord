// Module ID: 4798
// Function ID: 4799
// Name: shimArrayPrototypeMap
// Dependencies: [4733, 4752]

// Module 4798 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = _require(4733)();
  _require = tmp;
  _require(4752)(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

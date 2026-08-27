// Module ID: 4785
// Function ID: 4786
// Name: shimArrayPrototypeMap
// Dependencies: [4720, 4739]

// Module 4785 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = _require(4720)();
  _require = tmp;
  _require(4739)(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

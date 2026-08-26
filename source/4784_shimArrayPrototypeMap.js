// Module ID: 4784
// Function ID: 4785
// Name: shimArrayPrototypeMap
// Dependencies: [4719, 4738]

// Module 4784 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = _require(4719)();
  _require = tmp;
  _require(4738)(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

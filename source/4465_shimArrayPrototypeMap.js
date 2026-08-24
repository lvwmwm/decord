// Module ID: 4465
// Function ID: 4466
// Name: shimArrayPrototypeMap
// Dependencies: [4400, 4419]

// Module 4465 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = _require(4400)();
  _require = tmp;
  _require(4419)(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

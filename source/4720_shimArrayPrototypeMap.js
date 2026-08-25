// Module ID: 4720
// Function ID: 4721
// Name: shimArrayPrototypeMap
// Dependencies: [4655, 4674]

// Module 4720 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = _require(4655)();
  _require = tmp;
  _require(4674)(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

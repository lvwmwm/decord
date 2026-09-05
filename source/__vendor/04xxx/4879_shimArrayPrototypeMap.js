// Module ID: 4879
// Function ID: 4880
// Name: shimArrayPrototypeMap
// Dependencies: [4814, 4833]

// Module 4879 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = _require(4814)();
  _require = tmp;
  _require(4833)(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

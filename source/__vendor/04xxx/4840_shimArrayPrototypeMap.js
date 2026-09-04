// Module ID: 4840
// Function ID: 4841
// Name: shimArrayPrototypeMap
// Dependencies: [4775, 4794]

// Module 4840 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = _require(4775)();
  _require = tmp;
  _require(4794)(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

// Module ID: 4833
// Function ID: 4834
// Name: shimArrayPrototypeMap
// Dependencies: [4768, 4787]

// Module 4833 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = _require(4768)();
  _require = tmp;
  _require(4787)(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

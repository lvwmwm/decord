// Module ID: 5075
// Function ID: 5076
// Name: shimArrayPrototypeMap
// Dependencies: [5010, 5029]

// Module 5075 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5010 */;
import _mod5029 from "module_5029" /* 5029 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5029(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

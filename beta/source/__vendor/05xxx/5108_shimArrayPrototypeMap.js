// Module ID: 5108
// Function ID: 5109
// Name: shimArrayPrototypeMap
// Dependencies: [5043, 5062]

// Module 5108 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5043 */;
import _mod5062 from "module_5062" /* 5062 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5062(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

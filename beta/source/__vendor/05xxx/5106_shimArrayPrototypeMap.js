// Module ID: 5106
// Function ID: 5107
// Name: shimArrayPrototypeMap
// Dependencies: [5041, 5060]

// Module 5106 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5041 */;
import _mod5060 from "module_5060" /* 5060 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5060(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

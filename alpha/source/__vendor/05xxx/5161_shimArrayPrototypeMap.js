// Module ID: 5161
// Function ID: 5162
// Name: shimArrayPrototypeMap
// Dependencies: [5096, 5115]

// Module 5161 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5096 */;
import _mod5115 from "module_5115" /* 5115 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5115(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

// Module ID: 5076
// Function ID: 5077
// Name: shimArrayPrototypeMap
// Dependencies: [5011, 5030]

// Module 5076 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5011 */;
import _mod5030 from "module_5030" /* 5030 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5030(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

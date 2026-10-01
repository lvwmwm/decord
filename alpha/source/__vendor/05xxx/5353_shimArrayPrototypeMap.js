// Module ID: 5353
// Function ID: 5354
// Name: shimArrayPrototypeMap
// Dependencies: [5288, 5307]

// Module 5353 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5288 */;
import _mod5307 from "module_5307" /* 5307 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5307(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};

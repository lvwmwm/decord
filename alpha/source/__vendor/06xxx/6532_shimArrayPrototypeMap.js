// Module ID: 6532
// Function ID: 6533
// Name: shimArrayPrototypeMap
// Dependencies: [6467, 6486]

// Module 6532 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 6467 */;
import defineProperties from "defineProperties" /* 6486 */;


export default function shimArrayPrototypeMap() {
  const tmp = getPolyfill();
  let closure_0 = tmp;
  const obj = {
    map() {
      return Array.prototype.map !== closure_0;
    }
  };
  defineProperties(Array.prototype, { map: tmp }, obj);
  return tmp;
};

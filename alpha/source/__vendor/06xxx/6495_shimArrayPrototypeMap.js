// Module ID: 6495
// Function ID: 6496
// Name: shimArrayPrototypeMap
// Dependencies: [6430, 6449]

// Module 6495 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 6430 */;
import defineProperties from "defineProperties" /* 6449 */;


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

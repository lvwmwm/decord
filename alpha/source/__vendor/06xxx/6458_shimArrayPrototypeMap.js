// Module ID: 6458
// Function ID: 6459
// Name: shimArrayPrototypeMap
// Dependencies: [6393, 6412]

// Module 6458 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 6393 */;
import defineProperties from "defineProperties" /* 6412 */;


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

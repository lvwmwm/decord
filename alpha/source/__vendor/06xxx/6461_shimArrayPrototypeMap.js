// Module ID: 6461
// Function ID: 6462
// Name: shimArrayPrototypeMap
// Dependencies: [6396, 6415]

// Module 6461 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 6396 */;
import defineProperties from "defineProperties" /* 6415 */;


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

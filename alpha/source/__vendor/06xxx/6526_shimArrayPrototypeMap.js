// Module ID: 6526
// Function ID: 6527
// Name: shimArrayPrototypeMap
// Dependencies: [6461, 6480]

// Module 6526 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 6461 */;
import defineProperties from "defineProperties" /* 6480 */;


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

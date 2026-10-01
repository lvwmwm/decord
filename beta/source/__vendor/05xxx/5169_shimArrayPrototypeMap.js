// Module ID: 5169
// Function ID: 5170
// Name: shimArrayPrototypeMap
// Dependencies: [5104, 5123]

// Module 5169 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 5104 */;
import defineProperties from "defineProperties" /* 5123 */;


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

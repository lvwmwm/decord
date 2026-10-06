// Module ID: 5170
// Function ID: 5171
// Name: shimArrayPrototypeMap
// Dependencies: [5105, 5124]

// Module 5170 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 5105 */;
import defineProperties from "defineProperties" /* 5124 */;


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

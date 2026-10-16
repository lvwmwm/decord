// Module ID: 5940
// Function ID: 5941
// Name: shimArrayPrototypeMap
// Dependencies: [5875, 5894]

// Module 5940 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 5875 */;
import defineProperties from "defineProperties" /* 5894 */;


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

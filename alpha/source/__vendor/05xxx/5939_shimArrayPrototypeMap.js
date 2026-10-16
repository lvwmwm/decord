// Module ID: 5939
// Function ID: 5940
// Name: shimArrayPrototypeMap
// Dependencies: [5874, 5893]

// Module 5939 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 5874 */;
import defineProperties from "defineProperties" /* 5893 */;


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

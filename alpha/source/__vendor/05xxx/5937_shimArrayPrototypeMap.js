// Module ID: 5937
// Function ID: 5938
// Name: shimArrayPrototypeMap
// Dependencies: [5872, 5891]

// Module 5937 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 5872 */;
import defineProperties from "defineProperties" /* 5891 */;


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

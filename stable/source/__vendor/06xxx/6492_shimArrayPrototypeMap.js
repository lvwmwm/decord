// Module ID: 6492
// Function ID: 6493
// Name: shimArrayPrototypeMap
// Dependencies: [6427, 6446]

// Module 6492 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 6427 */;
import defineProperties from "defineProperties" /* 6446 */;


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

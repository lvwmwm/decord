// Module ID: 6439
// Function ID: 6440
// Name: shimArrayPrototypeMap
// Dependencies: [6374, 6393]

// Module 6439 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 6374 */;
import defineProperties from "defineProperties" /* 6393 */;


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

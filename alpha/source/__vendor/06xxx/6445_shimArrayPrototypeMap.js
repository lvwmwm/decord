// Module ID: 6445
// Function ID: 6446
// Name: shimArrayPrototypeMap
// Dependencies: [6380, 6399]

// Module 6445 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 6380 */;
import defineProperties from "defineProperties" /* 6399 */;


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

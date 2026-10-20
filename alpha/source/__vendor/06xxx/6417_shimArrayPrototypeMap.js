// Module ID: 6417
// Function ID: 6418
// Name: shimArrayPrototypeMap
// Dependencies: [6352, 6371]

// Module 6417 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 6352 */;
import defineProperties from "defineProperties" /* 6371 */;


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

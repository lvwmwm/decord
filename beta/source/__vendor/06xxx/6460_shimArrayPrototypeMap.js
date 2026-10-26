// Module ID: 6460
// Function ID: 6461
// Name: shimArrayPrototypeMap
// Dependencies: [6395, 6414]

// Module 6460 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 6395 */;
import defineProperties from "defineProperties" /* 6414 */;


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

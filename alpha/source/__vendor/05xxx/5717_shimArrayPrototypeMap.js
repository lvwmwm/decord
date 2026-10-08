// Module ID: 5717
// Function ID: 5718
// Name: shimArrayPrototypeMap
// Dependencies: [5652, 5671]

// Module 5717 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 5652 */;
import defineProperties from "defineProperties" /* 5671 */;


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

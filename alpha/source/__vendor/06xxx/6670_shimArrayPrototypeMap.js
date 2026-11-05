// Module ID: 6670
// Function ID: 6671
// Name: shimArrayPrototypeMap
// Dependencies: [6605, 6624]

// Module 6670 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 6605 */;
import defineProperties from "defineProperties" /* 6624 */;


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

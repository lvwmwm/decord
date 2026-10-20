// Module ID: 5721
// Function ID: 5722
// Name: shimArrayPrototypeMap
// Dependencies: [5656, 5675]

// Module 5721 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 5656 */;
import defineProperties from "defineProperties" /* 5675 */;


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

// Module ID: 5977
// Function ID: 5978
// Name: shimArrayPrototypeMap
// Dependencies: [5912, 5931]

// Module 5977 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 5912 */;
import defineProperties from "defineProperties" /* 5931 */;


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

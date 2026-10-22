// Module ID: 6446
// Function ID: 6447
// Name: shimArrayPrototypeMap
// Dependencies: [6381, 6400]

// Module 6446 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 6381 */;
import defineProperties from "defineProperties" /* 6400 */;


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

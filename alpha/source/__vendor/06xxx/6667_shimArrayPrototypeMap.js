// Module ID: 6667
// Function ID: 6668
// Name: shimArrayPrototypeMap
// Dependencies: [6602, 6621]

// Module 6667 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 6602 */;
import defineProperties from "defineProperties" /* 6621 */;


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

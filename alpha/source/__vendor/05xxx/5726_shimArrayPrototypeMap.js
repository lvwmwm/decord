// Module ID: 5726
// Function ID: 5727
// Name: shimArrayPrototypeMap
// Dependencies: [5661, 5680]

// Module 5726 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 5661 */;
import defineProperties from "defineProperties" /* 5680 */;


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

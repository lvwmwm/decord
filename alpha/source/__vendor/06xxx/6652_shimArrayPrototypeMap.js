// Module ID: 6652
// Function ID: 6653
// Name: shimArrayPrototypeMap
// Dependencies: [6587, 6606]

// Module 6652 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 6587 */;
import defineProperties from "defineProperties" /* 6606 */;


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

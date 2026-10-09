// Module ID: 5718
// Function ID: 5719
// Name: shimArrayPrototypeMap
// Dependencies: [5653, 5672]

// Module 5718 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 5653 */;
import defineProperties from "defineProperties" /* 5672 */;


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

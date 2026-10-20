// Module ID: 6414
// Function ID: 6415
// Name: shimArrayPrototypeMap
// Dependencies: [6349, 6368]

// Module 6414 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 6349 */;
import defineProperties from "defineProperties" /* 6368 */;


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

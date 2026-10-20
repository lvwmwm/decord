// Module ID: 6416
// Function ID: 6417
// Name: shimAllSettled
// Dependencies: [6339, 6340, 6368]

// Module 6416 (shimAllSettled)
import requirePromise from "requirePromise" /* 6339 */;
import getPolyfill from "getPolyfill" /* 6340 */;
import defineProperties from "defineProperties" /* 6368 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = getPolyfill();
  let closure_0 = tmp2;
  const obj = {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  };
  defineProperties(Promise, { allSettled: tmp2 }, obj);
  return tmp2;
};

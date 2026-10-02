// Module ID: 5172
// Function ID: 5173
// Name: shimAllSettled
// Dependencies: [5095, 5096, 5124]

// Module 5172 (shimAllSettled)
import requirePromise from "requirePromise" /* 5095 */;
import getPolyfill from "getPolyfill" /* 5096 */;
import defineProperties from "defineProperties" /* 5124 */;


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

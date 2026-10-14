// Module ID: 5401
// Function ID: 5402
// Name: shimAllSettled
// Dependencies: [5324, 5325, 5353]

// Module 5401 (shimAllSettled)
import requirePromise from "requirePromise" /* 5324 */;
import getPolyfill from "getPolyfill" /* 5325 */;
import defineProperties from "defineProperties" /* 5353 */;


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

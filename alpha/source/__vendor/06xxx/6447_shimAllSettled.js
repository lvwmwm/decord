// Module ID: 6447
// Function ID: 6448
// Name: shimAllSettled
// Dependencies: [6370, 6371, 6399]

// Module 6447 (shimAllSettled)
import requirePromise from "requirePromise" /* 6370 */;
import getPolyfill from "getPolyfill" /* 6371 */;
import defineProperties from "defineProperties" /* 6399 */;


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

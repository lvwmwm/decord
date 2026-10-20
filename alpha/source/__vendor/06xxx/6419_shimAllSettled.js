// Module ID: 6419
// Function ID: 6420
// Name: shimAllSettled
// Dependencies: [6342, 6343, 6371]

// Module 6419 (shimAllSettled)
import requirePromise from "requirePromise" /* 6342 */;
import getPolyfill from "getPolyfill" /* 6343 */;
import defineProperties from "defineProperties" /* 6371 */;


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

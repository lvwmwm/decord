// Module ID: 6441
// Function ID: 6442
// Name: shimAllSettled
// Dependencies: [6364, 6365, 6393]

// Module 6441 (shimAllSettled)
import requirePromise from "requirePromise" /* 6364 */;
import getPolyfill from "getPolyfill" /* 6365 */;
import defineProperties from "defineProperties" /* 6393 */;


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

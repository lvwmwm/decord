// Module ID: 6463
// Function ID: 6464
// Name: shimAllSettled
// Dependencies: [6386, 6387, 6415]

// Module 6463 (shimAllSettled)
import requirePromise from "requirePromise" /* 6386 */;
import getPolyfill from "getPolyfill" /* 6387 */;
import defineProperties from "defineProperties" /* 6415 */;


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

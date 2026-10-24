// Module ID: 6462
// Function ID: 6463
// Name: shimAllSettled
// Dependencies: [6385, 6386, 6414]

// Module 6462 (shimAllSettled)
import requirePromise from "requirePromise" /* 6385 */;
import getPolyfill from "getPolyfill" /* 6386 */;
import defineProperties from "defineProperties" /* 6414 */;


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

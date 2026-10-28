// Module ID: 6494
// Function ID: 6495
// Name: shimAllSettled
// Dependencies: [6417, 6418, 6446]

// Module 6494 (shimAllSettled)
import requirePromise from "requirePromise" /* 6417 */;
import getPolyfill from "getPolyfill" /* 6418 */;
import defineProperties from "defineProperties" /* 6446 */;


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

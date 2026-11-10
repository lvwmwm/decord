// Module ID: 6534
// Function ID: 6535
// Name: shimAllSettled
// Dependencies: [6457, 6458, 6486]

// Module 6534 (shimAllSettled)
import requirePromise from "requirePromise" /* 6457 */;
import getPolyfill from "getPolyfill" /* 6458 */;
import defineProperties from "defineProperties" /* 6486 */;


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

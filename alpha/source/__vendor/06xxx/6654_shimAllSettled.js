// Module ID: 6654
// Function ID: 6655
// Name: shimAllSettled
// Dependencies: [6577, 6578, 6606]

// Module 6654 (shimAllSettled)
import requirePromise from "requirePromise" /* 6577 */;
import getPolyfill from "getPolyfill" /* 6578 */;
import defineProperties from "defineProperties" /* 6606 */;


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

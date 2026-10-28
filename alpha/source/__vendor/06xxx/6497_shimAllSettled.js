// Module ID: 6497
// Function ID: 6498
// Name: shimAllSettled
// Dependencies: [6420, 6421, 6449]

// Module 6497 (shimAllSettled)
import requirePromise from "requirePromise" /* 6420 */;
import getPolyfill from "getPolyfill" /* 6421 */;
import defineProperties from "defineProperties" /* 6449 */;


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

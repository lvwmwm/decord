// Module ID: 6528
// Function ID: 6529
// Name: shimAllSettled
// Dependencies: [6451, 6452, 6480]

// Module 6528 (shimAllSettled)
import requirePromise from "requirePromise" /* 6451 */;
import getPolyfill from "getPolyfill" /* 6452 */;
import defineProperties from "defineProperties" /* 6480 */;


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

// Module ID: 6448
// Function ID: 6449
// Name: shimAllSettled
// Dependencies: [6371, 6372, 6400]

// Module 6448 (shimAllSettled)
import requirePromise from "requirePromise" /* 6371 */;
import getPolyfill from "getPolyfill" /* 6372 */;
import defineProperties from "defineProperties" /* 6400 */;


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

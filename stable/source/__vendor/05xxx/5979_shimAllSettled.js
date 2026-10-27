// Module ID: 5979
// Function ID: 5980
// Name: shimAllSettled
// Dependencies: [5902, 5903, 5931]

// Module 5979 (shimAllSettled)
import requirePromise from "requirePromise" /* 5902 */;
import getPolyfill from "getPolyfill" /* 5903 */;
import defineProperties from "defineProperties" /* 5931 */;


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

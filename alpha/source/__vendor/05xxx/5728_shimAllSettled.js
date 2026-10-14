// Module ID: 5728
// Function ID: 5729
// Name: shimAllSettled
// Dependencies: [5651, 5652, 5680]

// Module 5728 (shimAllSettled)
import requirePromise from "requirePromise" /* 5651 */;
import getPolyfill from "getPolyfill" /* 5652 */;
import defineProperties from "defineProperties" /* 5680 */;


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

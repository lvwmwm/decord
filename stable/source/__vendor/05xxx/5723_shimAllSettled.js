// Module ID: 5723
// Function ID: 5724
// Name: shimAllSettled
// Dependencies: [5646, 5647, 5675]

// Module 5723 (shimAllSettled)
import requirePromise from "requirePromise" /* 5646 */;
import getPolyfill from "getPolyfill" /* 5647 */;
import defineProperties from "defineProperties" /* 5675 */;


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

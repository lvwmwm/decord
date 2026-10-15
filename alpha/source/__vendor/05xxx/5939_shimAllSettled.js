// Module ID: 5939
// Function ID: 5940
// Name: shimAllSettled
// Dependencies: [5862, 5863, 5891]

// Module 5939 (shimAllSettled)
import requirePromise from "requirePromise" /* 5862 */;
import getPolyfill from "getPolyfill" /* 5863 */;
import defineProperties from "defineProperties" /* 5891 */;


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

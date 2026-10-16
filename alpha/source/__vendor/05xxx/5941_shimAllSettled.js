// Module ID: 5941
// Function ID: 5942
// Name: shimAllSettled
// Dependencies: [5864, 5865, 5893]

// Module 5941 (shimAllSettled)
import requirePromise from "requirePromise" /* 5864 */;
import getPolyfill from "getPolyfill" /* 5865 */;
import defineProperties from "defineProperties" /* 5893 */;


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

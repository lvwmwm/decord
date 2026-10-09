// Module ID: 5720
// Function ID: 5721
// Name: shimAllSettled
// Dependencies: [5643, 5644, 5672]

// Module 5720 (shimAllSettled)
import requirePromise from "requirePromise" /* 5643 */;
import getPolyfill from "getPolyfill" /* 5644 */;
import defineProperties from "defineProperties" /* 5672 */;


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

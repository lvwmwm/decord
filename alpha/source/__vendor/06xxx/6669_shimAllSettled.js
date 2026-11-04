// Module ID: 6669
// Function ID: 6670
// Name: shimAllSettled
// Dependencies: [6592, 6593, 6621]

// Module 6669 (shimAllSettled)
import requirePromise from "requirePromise" /* 6592 */;
import getPolyfill from "getPolyfill" /* 6593 */;
import defineProperties from "defineProperties" /* 6621 */;


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

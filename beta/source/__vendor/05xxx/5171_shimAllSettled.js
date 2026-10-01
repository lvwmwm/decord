// Module ID: 5171
// Function ID: 5172
// Name: shimAllSettled
// Dependencies: [5094, 5095, 5123]

// Module 5171 (shimAllSettled)
import requirePromise from "requirePromise" /* 5094 */;
import getPolyfill from "getPolyfill" /* 5095 */;
import defineProperties from "defineProperties" /* 5123 */;


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

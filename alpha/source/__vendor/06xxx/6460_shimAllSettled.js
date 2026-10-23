// Module ID: 6460
// Function ID: 6461
// Name: shimAllSettled
// Dependencies: [6383, 6384, 6412]

// Module 6460 (shimAllSettled)
import requirePromise from "requirePromise" /* 6383 */;
import getPolyfill from "getPolyfill" /* 6384 */;
import defineProperties from "defineProperties" /* 6412 */;


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

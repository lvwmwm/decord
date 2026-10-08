// Module ID: 5719
// Function ID: 5720
// Name: shimAllSettled
// Dependencies: [5642, 5643, 5671]

// Module 5719 (shimAllSettled)
import requirePromise from "requirePromise" /* 5642 */;
import getPolyfill from "getPolyfill" /* 5643 */;
import defineProperties from "defineProperties" /* 5671 */;


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

// Module ID: 5942
// Function ID: 5943
// Name: shimAllSettled
// Dependencies: [5865, 5866, 5894]

// Module 5942 (shimAllSettled)
import requirePromise from "requirePromise" /* 5865 */;
import getPolyfill from "getPolyfill" /* 5866 */;
import defineProperties from "defineProperties" /* 5894 */;


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

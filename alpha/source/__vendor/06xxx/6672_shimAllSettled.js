// Module ID: 6672
// Function ID: 6673
// Name: shimAllSettled
// Dependencies: [6595, 6596, 6624]

// Module 6672 (shimAllSettled)
import requirePromise from "requirePromise" /* 6595 */;
import getPolyfill from "getPolyfill" /* 6596 */;
import defineProperties from "defineProperties" /* 6624 */;


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

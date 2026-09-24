// Module ID: 5110
// Function ID: 5111
// Name: shimAllSettled
// Dependencies: [5033, 5034, 5062]

// Module 5110 (shimAllSettled)
import requirePromise from "requirePromise" /* 5033 */;
import _mod5034 from "module_5034" /* 5034 */;
import _mod5062 from "module_5062" /* 5062 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5034();
  closure_0 = tmp2;
  _mod5062(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};

// Module ID: 5108
// Function ID: 5109
// Name: shimAllSettled
// Dependencies: [5031, 5032, 5060]

// Module 5108 (shimAllSettled)
import requirePromise from "requirePromise" /* 5031 */;
import _mod5032 from "module_5032" /* 5032 */;
import _mod5060 from "module_5060" /* 5060 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5032();
  closure_0 = tmp2;
  _mod5060(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};

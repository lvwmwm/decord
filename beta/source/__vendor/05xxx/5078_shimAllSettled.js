// Module ID: 5078
// Function ID: 5079
// Name: shimAllSettled
// Dependencies: [5001, 5002, 5030]

// Module 5078 (shimAllSettled)
import requirePromise from "requirePromise" /* 5001 */;
import _mod5002 from "module_5002" /* 5002 */;
import _mod5030 from "module_5030" /* 5030 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5002();
  closure_0 = tmp2;
  _mod5030(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};

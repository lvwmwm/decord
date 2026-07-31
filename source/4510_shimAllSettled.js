// Module ID: 4510
// Function ID: 4511
// Name: shimAllSettled
// Dependencies: [4433, 4434, 4462]

// Module 4510 (shimAllSettled)

export default function shimAllSettled() {
  require(4433) /* requirePromise */();
  const tmp2 = require(4434) /* getPolyfill */();
  require = tmp2;
  require(4462) /* defineProperty */(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};

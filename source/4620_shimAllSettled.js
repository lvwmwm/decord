// Module ID: 4620
// Function ID: 4621
// Name: shimAllSettled
// Dependencies: [4543, 4544, 4572]

// Module 4620 (shimAllSettled)

export default function shimAllSettled() {
  require(4543) /* requirePromise */();
  const tmp2 = require(4544) /* getPolyfill */();
  require = tmp2;
  require(4572) /* defineProperty */(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};

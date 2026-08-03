// Module ID: 4572
// Function ID: 4573
// Name: shimAllSettled
// Dependencies: [4495, 4496, 4524]

// Module 4572 (shimAllSettled)

export default function shimAllSettled() {
  require(4495) /* requirePromise */();
  const tmp2 = require(4496) /* getPolyfill */();
  require = tmp2;
  require(4524) /* defineProperty */(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};

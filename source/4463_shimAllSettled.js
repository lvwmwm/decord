// Module ID: 4463
// Function ID: 4464
// Name: shimAllSettled
// Dependencies: [4386, 4387, 4415]

// Module 4463 (shimAllSettled)

export default function shimAllSettled() {
  require(4386) /* requirePromise */();
  const tmp2 = require(4387) /* getPolyfill */();
  require = tmp2;
  require(4415) /* defineProperty */(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};

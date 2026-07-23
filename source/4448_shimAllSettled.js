// Module ID: 4448
// Function ID: 38953
// Name: shimAllSettled
// Dependencies: [4371, 4372, 4400]

// Module 4448 (shimAllSettled)

export default function shimAllSettled() {
  require(4371) /* requirePromise */();
  const tmp2 = require(4372) /* getPolyfill */();
  require = tmp2;
  require(4400) /* defineProperty */(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};

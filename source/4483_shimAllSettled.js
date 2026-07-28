// Module ID: 4483
// Function ID: 39080
// Name: shimAllSettled
// Dependencies: [4406, 4407, 4435]

// Module 4483 (shimAllSettled)

export default function shimAllSettled() {
  require(4406) /* requirePromise */();
  const tmp2 = require(4407) /* getPolyfill */();
  require = tmp2;
  require(4435) /* defineProperty */(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};

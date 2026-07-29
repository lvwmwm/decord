// Module ID: 4506
// Function ID: 4507
// Name: shimAllSettled
// Dependencies: [4429, 4430, 4458]

// Module 4506 (shimAllSettled)

export default function shimAllSettled() {
  require(4429) /* requirePromise */();
  const tmp2 = require(4430) /* getPolyfill */();
  require = tmp2;
  require(4458) /* defineProperty */(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};

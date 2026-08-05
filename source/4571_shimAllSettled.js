// Module ID: 4571
// Function ID: 4572
// Name: shimAllSettled
// Dependencies: [4494, 4495, 4523]

// Module 4571 (shimAllSettled)

export default function shimAllSettled() {
  require(4494) /* requirePromise */();
  const tmp2 = require(4495) /* getPolyfill */();
  require = tmp2;
  require(4523) /* defineProperty */(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};

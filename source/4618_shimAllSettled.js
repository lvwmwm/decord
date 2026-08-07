// Module ID: 4618
// Function ID: 4619
// Name: shimAllSettled
// Dependencies: [4541, 4542, 4570]

// Module 4618 (shimAllSettled)

export default function shimAllSettled() {
  require(4541) /* requirePromise */();
  const tmp2 = require(4542) /* getPolyfill */();
  require = tmp2;
  require(4570) /* defineProperty */(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};

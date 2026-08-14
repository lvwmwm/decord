// Module ID: 4683
// Function ID: 4684
// Name: shimAllSettled
// Dependencies: [4606, 4607, 4635]

// Module 4683 (shimAllSettled)

export default function shimAllSettled() {
  require(4606) /* requirePromise */();
  const tmp2 = require(4607) /* getPolyfill */();
  require = tmp2;
  require(4635) /* defineProperty */(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};

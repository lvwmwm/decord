// Module ID: 4661
// Function ID: 4662
// Name: shimAllSettled
// Dependencies: [4584, 4585, 4613]

// Module 4661 (shimAllSettled)

export default function shimAllSettled() {
  require(4584) /* requirePromise */();
  const tmp2 = require(4585) /* getPolyfill */();
  require = tmp2;
  require(4613) /* defineProperty */(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};

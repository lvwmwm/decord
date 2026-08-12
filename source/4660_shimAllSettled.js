// Module ID: 4660
// Function ID: 4661
// Name: shimAllSettled
// Dependencies: [4583, 4584, 4612]

// Module 4660 (shimAllSettled)

export default function shimAllSettled() {
  require(4583) /* requirePromise */();
  const tmp2 = require(4584) /* getPolyfill */();
  require = tmp2;
  require(4612) /* defineProperty */(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};

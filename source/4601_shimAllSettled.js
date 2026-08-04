// Module ID: 4601
// Function ID: 4602
// Name: shimAllSettled
// Dependencies: [4524, 4525, 4553]

// Module 4601 (shimAllSettled)

export default function shimAllSettled() {
  require(4524) /* requirePromise */();
  const tmp2 = require(4525) /* getPolyfill */();
  require = tmp2;
  require(4553) /* defineProperty */(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};

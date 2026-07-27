// Module ID: 4449
// Function ID: 38966
// Name: shimAllSettled
// Dependencies: [4372, 4373, 4401]

// Module 4449 (shimAllSettled)

export default function shimAllSettled() {
  require(4372) /* requirePromise */();
  const tmp2 = require(4373) /* getPolyfill */();
  require = tmp2;
  require(4401) /* defineProperty */(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};

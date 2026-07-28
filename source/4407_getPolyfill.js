// Module ID: 4407
// Function ID: 38917
// Name: getPolyfill
// Dependencies: [4406, 4408]

// Module 4407 (getPolyfill)

export default function getPolyfill() {
  require(4406) /* requirePromise */();
  if ("function" === typeof Promise.allSettled) {
  } else {
    allSettled = require(4408) /* allSettled */;
  }
  return allSettled;
};

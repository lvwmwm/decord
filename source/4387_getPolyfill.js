// Module ID: 4387
// Function ID: 4388
// Name: getPolyfill
// Dependencies: [4386, 4388]

// Module 4387 (getPolyfill)

export default function getPolyfill() {
  require(4386) /* requirePromise */();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = require(4388) /* allSettled */;
  }
  return allSettled;
};

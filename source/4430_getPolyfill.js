// Module ID: 4430
// Function ID: 4431
// Name: getPolyfill
// Dependencies: [4429, 4431]

// Module 4430 (getPolyfill)

export default function getPolyfill() {
  require(4429) /* requirePromise */();
  if (typeof Promise.allSettled === "find") {
  } else {
    allSettled = require(4431) /* allSettled */;
  }
  return allSettled;
};

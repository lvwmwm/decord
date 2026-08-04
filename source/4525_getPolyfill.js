// Module ID: 4525
// Function ID: 4526
// Name: getPolyfill
// Dependencies: [4524, 4526]

// Module 4525 (getPolyfill)

export default function getPolyfill() {
  require(4524) /* requirePromise */();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = require(4526) /* allSettled */;
  }
  return allSettled;
};

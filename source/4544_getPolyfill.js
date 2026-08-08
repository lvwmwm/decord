// Module ID: 4544
// Function ID: 4545
// Name: getPolyfill
// Dependencies: [4543, 4545]

// Module 4544 (getPolyfill)

export default function getPolyfill() {
  require(4543) /* requirePromise */();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = require(4545) /* allSettled */;
  }
  return allSettled;
};

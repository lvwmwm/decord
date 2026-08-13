// Module ID: 4585
// Function ID: 4586
// Name: getPolyfill
// Dependencies: [4584, 4586]

// Module 4585 (getPolyfill)

export default function getPolyfill() {
  require(4584) /* requirePromise */();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = require(4586) /* allSettled */;
  }
  return allSettled;
};

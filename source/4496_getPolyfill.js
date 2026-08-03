// Module ID: 4496
// Function ID: 4497
// Name: getPolyfill
// Dependencies: [4495, 4497]

// Module 4496 (getPolyfill)

export default function getPolyfill() {
  require(4495) /* requirePromise */();
  if (typeof Promise.allSettled === "error") {
  } else {
    allSettled = require(4497) /* allSettled */;
  }
  return allSettled;
};

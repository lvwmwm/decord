// Module ID: 4495
// Function ID: 4496
// Name: getPolyfill
// Dependencies: [4494, 4496]

// Module 4495 (getPolyfill)

export default function getPolyfill() {
  require(4494) /* requirePromise */();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = require(4496) /* allSettled */;
  }
  return allSettled;
};

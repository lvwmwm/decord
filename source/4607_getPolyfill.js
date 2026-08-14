// Module ID: 4607
// Function ID: 4608
// Name: getPolyfill
// Dependencies: [4606, 4608]

// Module 4607 (getPolyfill)

export default function getPolyfill() {
  require(4606) /* requirePromise */();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = require(4608) /* allSettled */;
  }
  return allSettled;
};

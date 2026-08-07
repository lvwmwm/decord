// Module ID: 4542
// Function ID: 4543
// Name: getPolyfill
// Dependencies: [4541, 4543]

// Module 4542 (getPolyfill)

export default function getPolyfill() {
  require(4541) /* requirePromise */();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = require(4543) /* allSettled */;
  }
  return allSettled;
};

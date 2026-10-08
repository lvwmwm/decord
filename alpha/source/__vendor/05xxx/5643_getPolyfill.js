// Module ID: 5643
// Function ID: 5644
// Name: getPolyfill
// Dependencies: [5642, 5644]

// Module 5643 (getPolyfill)
import requirePromise from "requirePromise" /* 5642 */;

let tmp;
const allSettled2 = tmp(5644);

export default function getPolyfill() {
  let allSettled;
  requirePromise();
  if (typeof Promise.allSettled === "function") {
    allSettled = Promise.allSettled;
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};

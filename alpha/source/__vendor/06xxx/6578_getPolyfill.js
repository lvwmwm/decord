// Module ID: 6578
// Function ID: 6579
// Name: getPolyfill
// Dependencies: [6577, 6579]

// Module 6578 (getPolyfill)
import requirePromise from "requirePromise" /* 6577 */;

let tmp;
const allSettled2 = tmp(6579);

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

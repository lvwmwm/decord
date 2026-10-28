// Module ID: 6421
// Function ID: 6422
// Name: getPolyfill
// Dependencies: [6420, 6422]

// Module 6421 (getPolyfill)
import requirePromise from "requirePromise" /* 6420 */;

let tmp;
const allSettled2 = tmp(6422);

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

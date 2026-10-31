// Module ID: 6458
// Function ID: 6459
// Name: getPolyfill
// Dependencies: [6457, 6459]

// Module 6458 (getPolyfill)
import requirePromise from "requirePromise" /* 6457 */;

let tmp;
const allSettled2 = tmp(6459);

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

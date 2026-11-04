// Module ID: 6593
// Function ID: 6594
// Name: getPolyfill
// Dependencies: [6592, 6594]

// Module 6593 (getPolyfill)
import requirePromise from "requirePromise" /* 6592 */;

let tmp;
const allSettled2 = tmp(6594);

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

// Module ID: 6387
// Function ID: 6388
// Name: getPolyfill
// Dependencies: [6386, 6388]

// Module 6387 (getPolyfill)
import requirePromise from "requirePromise" /* 6386 */;

let tmp;
const allSettled2 = tmp(6388);

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

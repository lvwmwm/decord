// Module ID: 5332
// Function ID: 5333
// Name: getPolyfill
// Dependencies: [5331, 5333]

// Module 5332 (getPolyfill)
import requirePromise from "requirePromise" /* 5331 */;

let tmp;
const allSettled2 = tmp(5333);

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

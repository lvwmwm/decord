// Module ID: 6596
// Function ID: 6597
// Name: getPolyfill
// Dependencies: [6595, 6597]

// Module 6596 (getPolyfill)
import requirePromise from "requirePromise" /* 6595 */;

let tmp;
const allSettled2 = tmp(6597);

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

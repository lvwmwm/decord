// Module ID: 5647
// Function ID: 5648
// Name: getPolyfill
// Dependencies: [5646, 5648]

// Module 5647 (getPolyfill)
import requirePromise from "requirePromise" /* 5646 */;

let tmp;
const allSettled2 = tmp(5648);

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

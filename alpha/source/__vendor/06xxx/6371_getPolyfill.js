// Module ID: 6371
// Function ID: 6372
// Name: getPolyfill
// Dependencies: [6370, 6372]

// Module 6371 (getPolyfill)
import requirePromise from "requirePromise" /* 6370 */;

let tmp;
const allSettled2 = tmp(6372);

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

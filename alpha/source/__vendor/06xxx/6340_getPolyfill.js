// Module ID: 6340
// Function ID: 6341
// Name: getPolyfill
// Dependencies: [6339, 6341]

// Module 6340 (getPolyfill)
import requirePromise from "requirePromise" /* 6339 */;

let tmp;
const allSettled2 = tmp(6341);

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

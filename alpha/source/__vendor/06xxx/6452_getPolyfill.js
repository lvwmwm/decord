// Module ID: 6452
// Function ID: 6453
// Name: getPolyfill
// Dependencies: [6451, 6453]

// Module 6452 (getPolyfill)
import requirePromise from "requirePromise" /* 6451 */;

let tmp;
const allSettled2 = tmp(6453);

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

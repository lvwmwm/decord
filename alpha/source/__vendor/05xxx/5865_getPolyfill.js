// Module ID: 5865
// Function ID: 5866
// Name: getPolyfill
// Dependencies: [5864, 5866]

// Module 5865 (getPolyfill)
import requirePromise from "requirePromise" /* 5864 */;

let tmp;
const allSettled2 = tmp(5866);

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

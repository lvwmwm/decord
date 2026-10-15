// Module ID: 5863
// Function ID: 5864
// Name: getPolyfill
// Dependencies: [5862, 5864]

// Module 5863 (getPolyfill)
import requirePromise from "requirePromise" /* 5862 */;

let tmp;
const allSettled2 = tmp(5864);

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

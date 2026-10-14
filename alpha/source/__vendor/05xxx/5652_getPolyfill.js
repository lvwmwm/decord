// Module ID: 5652
// Function ID: 5653
// Name: getPolyfill
// Dependencies: [5651, 5653]

// Module 5652 (getPolyfill)
import requirePromise from "requirePromise" /* 5651 */;

let tmp;
const allSettled2 = tmp(5653);

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

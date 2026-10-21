// Module ID: 6365
// Function ID: 6366
// Name: getPolyfill
// Dependencies: [6364, 6366]

// Module 6365 (getPolyfill)
import requirePromise from "requirePromise" /* 6364 */;

let tmp;
const allSettled2 = tmp(6366);

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

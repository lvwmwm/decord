// Module ID: 6418
// Function ID: 6419
// Name: getPolyfill
// Dependencies: [6417, 6419]

// Module 6418 (getPolyfill)
import requirePromise from "requirePromise" /* 6417 */;

let tmp;
const allSettled2 = tmp(6419);

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

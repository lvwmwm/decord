// Module ID: 6386
// Function ID: 6387
// Name: getPolyfill
// Dependencies: [6385, 6387]

// Module 6386 (getPolyfill)
import requirePromise from "requirePromise" /* 6385 */;

let tmp;
const allSettled2 = tmp(6387);

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

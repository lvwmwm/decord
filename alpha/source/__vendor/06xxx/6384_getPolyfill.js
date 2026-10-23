// Module ID: 6384
// Function ID: 6385
// Name: getPolyfill
// Dependencies: [6383, 6385]

// Module 6384 (getPolyfill)
import requirePromise from "requirePromise" /* 6383 */;

let tmp;
const allSettled2 = tmp(6385);

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

// Module ID: 5325
// Function ID: 5326
// Name: getPolyfill
// Dependencies: [5324, 5326]

// Module 5325 (getPolyfill)
import requirePromise from "requirePromise" /* 5324 */;

let tmp;
const allSettled2 = tmp(5326);

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

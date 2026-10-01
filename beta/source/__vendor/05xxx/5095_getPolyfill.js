// Module ID: 5095
// Function ID: 5096
// Name: getPolyfill
// Dependencies: [5094, 5096]

// Module 5095 (getPolyfill)
import requirePromise from "requirePromise" /* 5094 */;

let tmp;
const allSettled2 = tmp(5096);

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

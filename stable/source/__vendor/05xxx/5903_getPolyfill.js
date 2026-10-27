// Module ID: 5903
// Function ID: 5904
// Name: getPolyfill
// Dependencies: [5902, 5904]

// Module 5903 (getPolyfill)
import requirePromise from "requirePromise" /* 5902 */;

let tmp;
const allSettled2 = tmp(5904);

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

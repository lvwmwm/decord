// Module ID: 5096
// Function ID: 5097
// Name: getPolyfill
// Dependencies: [5095, 5097]

// Module 5096 (getPolyfill)
import requirePromise from "requirePromise" /* 5095 */;

let tmp;
const allSettled2 = tmp(5097);

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

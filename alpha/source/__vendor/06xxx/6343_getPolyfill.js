// Module ID: 6343
// Function ID: 6344
// Name: getPolyfill
// Dependencies: [6342, 6344]

// Module 6343 (getPolyfill)
import requirePromise from "requirePromise" /* 6342 */;

let tmp;
const allSettled2 = tmp(6344);

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

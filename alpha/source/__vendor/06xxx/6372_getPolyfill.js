// Module ID: 6372
// Function ID: 6373
// Name: getPolyfill
// Dependencies: [6371, 6373]

// Module 6372 (getPolyfill)
import requirePromise from "requirePromise" /* 6371 */;

let tmp;
const allSettled2 = tmp(6373);

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

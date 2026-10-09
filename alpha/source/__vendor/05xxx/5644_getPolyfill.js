// Module ID: 5644
// Function ID: 5645
// Name: getPolyfill
// Dependencies: [5643, 5645]

// Module 5644 (getPolyfill)
import requirePromise from "requirePromise" /* 5643 */;

let tmp;
const allSettled2 = tmp(5645);

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

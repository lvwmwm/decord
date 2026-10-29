// Module ID: 6445
// Function ID: 6446
// Name: getPolyfill
// Dependencies: [6444, 6446]

// Module 6445 (getPolyfill)
import requirePromise from "requirePromise" /* 6444 */;

let tmp;
const allSettled2 = tmp(6446);

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

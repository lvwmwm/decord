// Module ID: 5866
// Function ID: 5867
// Name: getPolyfill
// Dependencies: [5865, 5867]

// Module 5866 (getPolyfill)
import requirePromise from "requirePromise" /* 5865 */;

let tmp;
const allSettled2 = tmp(5867);

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

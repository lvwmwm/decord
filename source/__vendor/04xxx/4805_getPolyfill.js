// Module ID: 4805
// Function ID: 4806
// Name: getPolyfill
// Dependencies: [4804, 4806]

// Module 4805 (getPolyfill)
import requirePromise from "requirePromise" /* 4804 */;
import allSettled2 from "allSettled" /* 4806 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};

// Module ID: 4726
// Function ID: 4727
// Name: getPolyfill
// Dependencies: [4725, 4727]

// Module 4726 (getPolyfill)
import requirePromise from "requirePromise" /* 4725 */;
import allSettled2 from "allSettled" /* 4727 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};

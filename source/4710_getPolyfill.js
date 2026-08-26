// Module ID: 4710
// Function ID: 4711
// Name: getPolyfill
// Dependencies: [4709, 4711]

// Module 4710 (getPolyfill)
import requirePromise from "requirePromise" /* 4709 */;
import allSettled2 from "allSettled" /* 4711 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};

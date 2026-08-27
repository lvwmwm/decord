// Module ID: 4711
// Function ID: 4712
// Name: getPolyfill
// Dependencies: [4710, 4712]

// Module 4711 (getPolyfill)
import requirePromise from "requirePromise" /* 4710 */;
import allSettled2 from "allSettled" /* 4712 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};

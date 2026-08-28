// Module ID: 4724
// Function ID: 4725
// Name: getPolyfill
// Dependencies: [4723, 4725]

// Module 4724 (getPolyfill)
import requirePromise from "requirePromise" /* 4723 */;
import allSettled2 from "allSettled" /* 4725 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};

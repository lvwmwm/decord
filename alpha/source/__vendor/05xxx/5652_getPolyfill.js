// Module ID: 5652
// Function ID: 5653
// Name: getPolyfill
// Dependencies: [5653, 5654]

// Module 5652 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 5653 */;

let map;

let tmp;
const _mod5654 = tmp(5654);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod5654;
  }
  return map;
};

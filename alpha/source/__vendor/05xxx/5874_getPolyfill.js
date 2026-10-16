// Module ID: 5874
// Function ID: 5875
// Name: getPolyfill
// Dependencies: [5875, 5876]

// Module 5874 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 5875 */;

let map;

let tmp;
const _mod5876 = tmp(5876);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod5876;
  }
  return map;
};

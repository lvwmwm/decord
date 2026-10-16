// Module ID: 5875
// Function ID: 5876
// Name: getPolyfill
// Dependencies: [5876, 5877]

// Module 5875 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 5876 */;

let map;

let tmp;
const _mod5877 = tmp(5877);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod5877;
  }
  return map;
};

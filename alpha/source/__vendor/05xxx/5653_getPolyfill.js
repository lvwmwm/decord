// Module ID: 5653
// Function ID: 5654
// Name: getPolyfill
// Dependencies: [5654, 5655]

// Module 5653 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 5654 */;

let map;

let tmp;
const _mod5655 = tmp(5655);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod5655;
  }
  return map;
};

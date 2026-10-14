// Module ID: 5661
// Function ID: 5662
// Name: getPolyfill
// Dependencies: [5662, 5663]

// Module 5661 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 5662 */;

let map;

let tmp;
const _mod5663 = tmp(5663);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod5663;
  }
  return map;
};

// Module ID: 5656
// Function ID: 5657
// Name: getPolyfill
// Dependencies: [5657, 5658]

// Module 5656 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 5657 */;

let map;

let tmp;
const _mod5658 = tmp(5658);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod5658;
  }
  return map;
};

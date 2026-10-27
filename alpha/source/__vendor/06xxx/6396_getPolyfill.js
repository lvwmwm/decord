// Module ID: 6396
// Function ID: 6397
// Name: getPolyfill
// Dependencies: [6397, 6398]

// Module 6396 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 6397 */;

let map;

let tmp;
const _mod6398 = tmp(6398);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod6398;
  }
  return map;
};

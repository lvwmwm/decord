// Module ID: 5341
// Function ID: 5342
// Name: getPolyfill
// Dependencies: [5342, 5343]

// Module 5341 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 5342 */;

let map;

let tmp;
const _mod5343 = tmp(5343);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod5343;
  }
  return map;
};

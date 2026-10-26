// Module ID: 6395
// Function ID: 6396
// Name: getPolyfill
// Dependencies: [6396, 6397]

// Module 6395 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 6396 */;

let map;

let tmp;
const _mod6397 = tmp(6397);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod6397;
  }
  return map;
};

// Module ID: 6381
// Function ID: 6382
// Name: getPolyfill
// Dependencies: [6382, 6383]

// Module 6381 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 6382 */;

let map;

let tmp;
const _mod6383 = tmp(6383);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod6383;
  }
  return map;
};

// Module ID: 6380
// Function ID: 6381
// Name: getPolyfill
// Dependencies: [6381, 6382]

// Module 6380 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 6381 */;

let map;

let tmp;
const _mod6382 = tmp(6382);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod6382;
  }
  return map;
};

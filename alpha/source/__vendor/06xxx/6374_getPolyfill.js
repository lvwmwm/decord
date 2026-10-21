// Module ID: 6374
// Function ID: 6375
// Name: getPolyfill
// Dependencies: [6375, 6376]

// Module 6374 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 6375 */;

let map;

let tmp;
const _mod6376 = tmp(6376);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod6376;
  }
  return map;
};

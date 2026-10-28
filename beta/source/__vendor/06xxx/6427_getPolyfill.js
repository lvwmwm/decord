// Module ID: 6427
// Function ID: 6428
// Name: getPolyfill
// Dependencies: [6428, 6429]

// Module 6427 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 6428 */;

let map;

let tmp;
const _mod6429 = tmp(6429);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod6429;
  }
  return map;
};

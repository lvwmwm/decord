// Module ID: 6467
// Function ID: 6468
// Name: getPolyfill
// Dependencies: [6468, 6469]

// Module 6467 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 6468 */;

let map;

let tmp;
const _mod6469 = tmp(6469);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod6469;
  }
  return map;
};

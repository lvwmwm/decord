// Module ID: 6602
// Function ID: 6603
// Name: getPolyfill
// Dependencies: [6603, 6604]

// Module 6602 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 6603 */;

let map;

let tmp;
const _mod6604 = tmp(6604);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod6604;
  }
  return map;
};

// Module ID: 6352
// Function ID: 6353
// Name: getPolyfill
// Dependencies: [6353, 6354]

// Module 6352 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 6353 */;

let map;

let tmp;
const _mod6354 = tmp(6354);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod6354;
  }
  return map;
};

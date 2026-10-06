// Module ID: 5105
// Function ID: 5106
// Name: getPolyfill
// Dependencies: [5106, 5107]

// Module 5105 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 5106 */;

let map;

let tmp;
const _mod5107 = tmp(5107);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod5107;
  }
  return map;
};

// Module ID: 5334
// Function ID: 5335
// Name: getPolyfill
// Dependencies: [5335, 5336]

// Module 5334 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 5335 */;

let map;

let tmp;
const _mod5336 = tmp(5336);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod5336;
  }
  return map;
};

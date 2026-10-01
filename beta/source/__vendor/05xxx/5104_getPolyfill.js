// Module ID: 5104
// Function ID: 5105
// Name: getPolyfill
// Dependencies: [5105, 5106]

// Module 5104 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 5105 */;

let map;

let tmp;
const _mod5106 = tmp(5106);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod5106;
  }
  return map;
};

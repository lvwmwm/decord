// Module ID: 6349
// Function ID: 6350
// Name: getPolyfill
// Dependencies: [6350, 6351]

// Module 6349 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 6350 */;

let map;

let tmp;
const _mod6351 = tmp(6351);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod6351;
  }
  return map;
};

// Module ID: 6605
// Function ID: 6606
// Name: getPolyfill
// Dependencies: [6606, 6607]

// Module 6605 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 6606 */;

let map;

let tmp;
const _mod6607 = tmp(6607);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod6607;
  }
  return map;
};

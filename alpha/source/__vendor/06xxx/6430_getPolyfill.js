// Module ID: 6430
// Function ID: 6431
// Name: getPolyfill
// Dependencies: [6431, 6432]

// Module 6430 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 6431 */;

let map;

let tmp;
const _mod6432 = tmp(6432);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod6432;
  }
  return map;
};

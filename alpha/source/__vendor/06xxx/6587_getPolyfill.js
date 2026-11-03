// Module ID: 6587
// Function ID: 6588
// Name: getPolyfill
// Dependencies: [6588, 6589]

// Module 6587 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 6588 */;

let map;

let tmp;
const _mod6589 = tmp(6589);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod6589;
  }
  return map;
};

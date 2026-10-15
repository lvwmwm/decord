// Module ID: 5872
// Function ID: 5873
// Name: getPolyfill
// Dependencies: [5873, 5874]

// Module 5872 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 5873 */;

let map;

let tmp;
const _mod5874 = tmp(5874);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod5874;
  }
  return map;
};

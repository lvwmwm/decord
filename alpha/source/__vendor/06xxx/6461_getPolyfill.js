// Module ID: 6461
// Function ID: 6462
// Name: getPolyfill
// Dependencies: [6462, 6463]

// Module 6461 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 6462 */;

let map;

let tmp;
const _mod6463 = tmp(6463);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod6463;
  }
  return map;
};

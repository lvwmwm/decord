// Module ID: 6454
// Function ID: 6455
// Name: getPolyfill
// Dependencies: [6455, 6456]

// Module 6454 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 6455 */;

let map;

let tmp;
const _mod6456 = tmp(6456);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod6456;
  }
  return map;
};

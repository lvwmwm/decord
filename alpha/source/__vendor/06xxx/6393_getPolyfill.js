// Module ID: 6393
// Function ID: 6394
// Name: getPolyfill
// Dependencies: [6394, 6395]

// Module 6393 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 6394 */;

let map;

let tmp;
const _mod6395 = tmp(6395);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod6395;
  }
  return map;
};

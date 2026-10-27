// Module ID: 5912
// Function ID: 5913
// Name: getPolyfill
// Dependencies: [5913, 5914]

// Module 5912 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 5913 */;

let map;

let tmp;
const _mod5914 = tmp(5914);

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod5914;
  }
  return map;
};

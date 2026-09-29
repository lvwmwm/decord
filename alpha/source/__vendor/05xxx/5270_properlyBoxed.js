// Module ID: 5270
// Function ID: 5271
// Name: properlyBoxed
// Dependencies: [5271, 5272]

// Module 5270 (properlyBoxed)
import _mod5271 from "module_5271" /* 5271 */;
import _mod5272 from "module_5272" /* 5272 */;


export default function getPolyfill() {
  if (!_mod5271(map)) {
    map = _mod5272;
  }
  return map;
};

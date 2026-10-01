// Module ID: 5288
// Function ID: 5289
// Name: properlyBoxed
// Dependencies: [5289, 5290]

// Module 5288 (properlyBoxed)
import _mod5289 from "module_5289" /* 5289 */;
import _mod5290 from "module_5290" /* 5290 */;


export default function getPolyfill() {
  if (!_mod5289(map)) {
    map = _mod5290;
  }
  return map;
};

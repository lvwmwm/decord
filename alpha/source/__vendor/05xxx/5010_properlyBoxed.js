// Module ID: 5010
// Function ID: 5011
// Name: properlyBoxed
// Dependencies: [5011, 5012]

// Module 5010 (properlyBoxed)
import _mod5011 from "module_5011" /* 5011 */;
import _mod5012 from "module_5012" /* 5012 */;


export default function getPolyfill() {
  if (!_mod5011(map)) {
    map = _mod5012;
  }
  return map;
};

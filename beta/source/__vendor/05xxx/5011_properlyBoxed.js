// Module ID: 5011
// Function ID: 5012
// Name: properlyBoxed
// Dependencies: [5012, 5013]

// Module 5011 (properlyBoxed)
import _mod5012 from "module_5012" /* 5012 */;
import _mod5013 from "module_5013" /* 5013 */;


export default function getPolyfill() {
  if (!_mod5012(map)) {
    map = _mod5013;
  }
  return map;
};

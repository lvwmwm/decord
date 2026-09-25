// Module ID: 5097
// Function ID: 5098
// Name: properlyBoxed
// Dependencies: [5098, 5099]

// Module 5097 (properlyBoxed)
import _mod5098 from "module_5098" /* 5098 */;
import _mod5099 from "module_5099" /* 5099 */;


export default function getPolyfill() {
  if (!_mod5098(map)) {
    map = _mod5099;
  }
  return map;
};

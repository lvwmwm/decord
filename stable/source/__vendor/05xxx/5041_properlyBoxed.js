// Module ID: 5041
// Function ID: 5042
// Name: properlyBoxed
// Dependencies: [5042, 5043]

// Module 5041 (properlyBoxed)
import _mod5042 from "module_5042" /* 5042 */;
import _mod5043 from "module_5043" /* 5043 */;


export default function getPolyfill() {
  if (!_mod5042(map)) {
    map = _mod5043;
  }
  return map;
};

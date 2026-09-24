// Module ID: 5096
// Function ID: 5097
// Name: properlyBoxed
// Dependencies: [5097, 5098]

// Module 5096 (properlyBoxed)
import _mod5097 from "module_5097" /* 5097 */;
import _mod5098 from "module_5098" /* 5098 */;


export default function getPolyfill() {
  if (!_mod5097(map)) {
    map = _mod5098;
  }
  return map;
};

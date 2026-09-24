// Module ID: 5043
// Function ID: 5044
// Name: properlyBoxed
// Dependencies: [5044, 5045]

// Module 5043 (properlyBoxed)
import _mod5044 from "module_5044" /* 5044 */;
import _mod5045 from "module_5045" /* 5045 */;


export default function getPolyfill() {
  if (!_mod5044(map)) {
    map = _mod5045;
  }
  return map;
};

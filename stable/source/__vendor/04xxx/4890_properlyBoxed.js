// Module ID: 4890
// Function ID: 4891
// Name: properlyBoxed
// Dependencies: [4891, 4892]

// Module 4890 (properlyBoxed)
import _mod4891 from "module_4891" /* 4891 */;
import _mod4892 from "module_4892" /* 4892 */;


export default function getPolyfill() {
  if (!_mod4891(map)) {
    map = _mod4892;
  }
  return map;
};

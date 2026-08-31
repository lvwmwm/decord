// Module ID: 4735
// Function ID: 4736
// Name: getPolyfill
// Dependencies: [4736, 4737]

// Module 4735 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 4736 */;
import map2 from "map" /* 4737 */;


export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
};

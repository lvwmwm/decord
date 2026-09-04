// Module ID: 4775
// Function ID: 4776
// Name: getPolyfill
// Dependencies: [4776, 4777]

// Module 4775 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 4776 */;
import map2 from "map" /* 4777 */;


export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
};

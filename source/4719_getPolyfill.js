// Module ID: 4719
// Function ID: 4720
// Name: getPolyfill
// Dependencies: [4720, 4721]

// Module 4719 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 4720 */;
import map2 from "map" /* 4721 */;


export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
};

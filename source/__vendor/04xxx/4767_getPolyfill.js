// Module ID: 4767
// Function ID: 4768
// Name: getPolyfill
// Dependencies: [4768, 4769]

// Module 4767 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 4768 */;
import map2 from "map" /* 4769 */;


export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
};

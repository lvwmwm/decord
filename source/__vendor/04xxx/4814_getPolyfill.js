// Module ID: 4814
// Function ID: 4815
// Name: getPolyfill
// Dependencies: [4815, 4816]

// Module 4814 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 4815 */;
import map2 from "map" /* 4816 */;


export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
};

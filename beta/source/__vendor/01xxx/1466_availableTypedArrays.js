// Module ID: 1466
// Function ID: 1467
// Name: availableTypedArrays
// Dependencies: [1467]

// Module 1466 (availableTypedArrays)
import _mod1467 from "module_1467" /* 1467 */;

if (typeof globalThis !== "undefined") {
  global = globalThis;
}

export default function availableTypedArrays() {
  let tmp2;
  const items = [];
  let num = 0;
  if (0 < _mod1467.length) {
    do {
      tmp2 = require;
      if (typeof global[_mod1467[num]] === "function") {
        items[items.length] = tmp2(1467)[num];
      }
      num = num + 1;
    } while (num < tmp2(1467).length);
  }
  return items;
};

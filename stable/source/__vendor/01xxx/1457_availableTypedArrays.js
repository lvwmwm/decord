// Module ID: 1457
// Function ID: 1458
// Name: availableTypedArrays
// Dependencies: [1458]

// Module 1457 (availableTypedArrays)
import _mod1458 from "module_1458" /* 1458 */;

if (typeof globalThis !== "undefined") {
  global = globalThis;
}

export default function availableTypedArrays() {
  let tmp2;
  const items = [];
  let num = 0;
  if (0 < _mod1458.length) {
    do {
      tmp2 = require;
      if (typeof global[_mod1458[num]] === "function") {
        items[items.length] = tmp2(1458)[num];
      }
      num = num + 1;
    } while (num < tmp2(1458).length);
  }
  return items;
};

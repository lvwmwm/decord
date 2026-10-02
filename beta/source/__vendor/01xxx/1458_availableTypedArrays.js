// Module ID: 1458
// Function ID: 1459
// Name: availableTypedArrays
// Dependencies: [1459]

// Module 1458 (availableTypedArrays)
import _mod1459 from "module_1459" /* 1459 */;

if (typeof globalThis !== "undefined") {
  global = globalThis;
}

export default function availableTypedArrays() {
  let tmp2;
  const items = [];
  let num = 0;
  if (0 < _mod1459.length) {
    do {
      tmp2 = require;
      if (typeof global[_mod1459[num]] === "function") {
        items[items.length] = tmp2(1459)[num];
      }
      num = num + 1;
    } while (num < tmp2(1459).length);
  }
  return items;
};

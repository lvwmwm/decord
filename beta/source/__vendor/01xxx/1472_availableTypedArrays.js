// Module ID: 1472
// Function ID: 1473
// Name: availableTypedArrays
// Dependencies: [1473]

// Module 1472 (availableTypedArrays)
import _mod1473 from "module_1473" /* 1473 */;

if (typeof globalThis !== "undefined") {
  global = globalThis;
}

export default function availableTypedArrays() {
  let tmp2;
  const items = [];
  let num = 0;
  if (0 < _mod1473.length) {
    do {
      tmp2 = require;
      if (typeof global[_mod1473[num]] === "function") {
        items[items.length] = tmp2(1473)[num];
      }
      num = num + 1;
    } while (num < tmp2(1473).length);
  }
  return items;
};

// Module ID: 1469
// Function ID: 1470
// Name: availableTypedArrays
// Dependencies: [1470]

// Module 1469 (availableTypedArrays)
import _mod1470 from "module_1470" /* 1470 */;

if (typeof globalThis !== "undefined") {
  global = globalThis;
}

export default function availableTypedArrays() {
  let tmp2;
  const items = [];
  let num = 0;
  if (0 < _mod1470.length) {
    do {
      tmp2 = require;
      if (typeof global[_mod1470[num]] === "function") {
        items[items.length] = tmp2(1470)[num];
      }
      num = num + 1;
    } while (num < tmp2(1470).length);
  }
  return items;
};

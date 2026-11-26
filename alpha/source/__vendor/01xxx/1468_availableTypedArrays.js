// Module ID: 1468
// Function ID: 1469
// Name: availableTypedArrays
// Dependencies: [1469]

// Module 1468 (availableTypedArrays)
import _mod1469 from "module_1469" /* 1469 */;

if (typeof globalThis !== "undefined") {
  global = globalThis;
}

export default function availableTypedArrays() {
  let tmp2;
  const items = [];
  let num = 0;
  if (0 < _mod1469.length) {
    do {
      tmp2 = require;
      if (typeof global[_mod1469[num]] === "function") {
        items[items.length] = tmp2(1469)[num];
      }
      num = num + 1;
    } while (num < tmp2(1469).length);
  }
  return items;
};

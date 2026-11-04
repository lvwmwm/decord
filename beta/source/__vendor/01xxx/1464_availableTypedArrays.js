// Module ID: 1464
// Function ID: 1465
// Name: availableTypedArrays
// Dependencies: [1465]

// Module 1464 (availableTypedArrays)
import _mod1465 from "module_1465" /* 1465 */;

if (typeof globalThis !== "undefined") {
  global = globalThis;
}

export default function availableTypedArrays() {
  let tmp2;
  const items = [];
  let num = 0;
  if (0 < _mod1465.length) {
    do {
      tmp2 = require;
      if (typeof global[_mod1465[num]] === "function") {
        items[items.length] = tmp2(1465)[num];
      }
      num = num + 1;
    } while (num < tmp2(1465).length);
  }
  return items;
};

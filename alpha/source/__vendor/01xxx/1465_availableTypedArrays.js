// Module ID: 1465
// Function ID: 1466
// Name: availableTypedArrays
// Dependencies: [1466]

// Module 1465 (availableTypedArrays)
import _mod1466 from "module_1466" /* 1466 */;

if (typeof globalThis !== "undefined") {
  global = globalThis;
}

export default function availableTypedArrays() {
  let tmp2;
  const items = [];
  let num = 0;
  if (0 < _mod1466.length) {
    do {
      tmp2 = require;
      if (typeof global[_mod1466[num]] === "function") {
        items[items.length] = tmp2(1466)[num];
      }
      num = num + 1;
    } while (num < tmp2(1466).length);
  }
  return items;
};

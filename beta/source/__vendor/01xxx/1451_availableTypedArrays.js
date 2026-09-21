// Module ID: 1451
// Function ID: 1452
// Name: availableTypedArrays
// Dependencies: [1452]

// Module 1451 (availableTypedArrays)
import _mod1452 from "module_1452" /* 1452 */;

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  let tmp2;
  const items = [];
  let num = 0;
  if (0 < _mod1452.length) {
    do {
      tmp2 = require;
      if (typeof global[_mod1452[num]] === "function") {
        items[items.length] = tmp2(1452)[num];
      }
      num = num + 1;
    } while (num < tmp2(1452).length);
  }
  return items;
};

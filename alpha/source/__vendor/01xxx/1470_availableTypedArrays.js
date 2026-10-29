// Module ID: 1470
// Function ID: 1471
// Name: availableTypedArrays
// Dependencies: [1471]

// Module 1470 (availableTypedArrays)
import _mod1471 from "module_1471" /* 1471 */;

if (typeof globalThis !== "undefined") {
  global = globalThis;
}

export default function availableTypedArrays() {
  let tmp2;
  const items = [];
  let num = 0;
  if (0 < _mod1471.length) {
    do {
      tmp2 = require;
      if (typeof global[_mod1471[num]] === "function") {
        items[items.length] = tmp2(1471)[num];
      }
      num = num + 1;
    } while (num < tmp2(1471).length);
  }
  return items;
};

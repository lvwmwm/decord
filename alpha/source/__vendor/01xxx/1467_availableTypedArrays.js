// Module ID: 1467
// Function ID: 1468
// Name: availableTypedArrays
// Dependencies: [1468]

// Module 1467 (availableTypedArrays)
import _mod1468 from "module_1468" /* 1468 */;

if (typeof globalThis !== "undefined") {
  global = globalThis;
}

export default function availableTypedArrays() {
  let tmp2;
  const items = [];
  let num = 0;
  if (0 < _mod1468.length) {
    do {
      tmp2 = require;
      if (typeof global[_mod1468[num]] === "function") {
        items[items.length] = tmp2(1468)[num];
      }
      num = num + 1;
    } while (num < tmp2(1468).length);
  }
  return items;
};

// Module ID: 1455
// Function ID: 1456
// Name: availableTypedArrays
// Dependencies: [1456]

// Module 1455 (availableTypedArrays)
import _mod1456 from "module_1456" /* 1456 */;

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  let tmp2;
  const items = [];
  let num = 0;
  if (0 < _mod1456.length) {
    do {
      tmp2 = require;
      if (typeof global[_mod1456[num]] === "function") {
        items[items.length] = tmp2(1456)[num];
      }
      num = num + 1;
    } while (num < tmp2(1456).length);
  }
  return items;
};

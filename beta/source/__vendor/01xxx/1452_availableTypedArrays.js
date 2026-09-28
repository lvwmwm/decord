// Module ID: 1452
// Function ID: 1453
// Name: availableTypedArrays
// Dependencies: [1453]

// Module 1452 (availableTypedArrays)
import _mod1453 from "module_1453" /* 1453 */;

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  let tmp2;
  const items = [];
  let num = 0;
  if (0 < _mod1453.length) {
    do {
      tmp2 = require;
      if (typeof global[_mod1453[num]] === "function") {
        items[items.length] = tmp2(1453)[num];
      }
      num = num + 1;
    } while (num < tmp2(1453).length);
  }
  return items;
};

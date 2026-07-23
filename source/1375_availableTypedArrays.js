// Module ID: 1375
// Function ID: 16513
// Name: availableTypedArrays
// Dependencies: [1376]

// Module 1375 (availableTypedArrays)
if ("undefined" !== typeof globalThis) {
  const global = globalThis;
}

export default function availableTypedArrays() {
  const items = [];
  let num = 0;
  if (0 < require(1376).length) {
    do {
      let tmp = global;
      let tmp2 = require;
      let tmp3 = dependencyMap;
      if ("function" === typeof global[require(undefined, 1376)[num]]) {
        let tmp4 = require;
        let tmp5 = dependencyMap;
        items[items.length] = require(1376)[num];
      }
      num = num + 1;
      let tmp6 = require;
      let tmp7 = dependencyMap;
    } while (num < require(1376).length);
  }
  return items;
};

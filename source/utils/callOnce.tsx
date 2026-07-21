// Module ID: 6906
// Function ID: 55021
// Name: callOnce
// Dependencies: []
// Exports: callOnce

// Module 6906 (callOnce)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("utils/callOnce.tsx");

export function callOnce(arg0) {
  let closure_2 = false;
  return (arg0) => {
    const items = [...arguments];
    if (!closure_2) {
      closure_2 = true;
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      let closure_1 = HermesBuiltin.apply(items1, undefined);
    }
    return closure_1;
  };
}

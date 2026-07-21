// Module ID: 6905
// Function ID: 55009
// Name: callOnce
// Dependencies: [284214097]
// Exports: callOnce

// Module 6905 (callOnce)
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

// Module ID: 5952
// Function ID: 5953
// Name: callOnce
// Dependencies: [2]
// Exports: callOnce

// Module 5952 (callOnce)
const result = require("set").fileFinishedImporting("utils/callOnce.tsx");

export function callOnce(outer1_1) {
  let closure_0 = outer1_1;
  let c2 = false;
  return () => {
    const items = [...arguments];
    if (!c2) {
      c2 = true;
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      let closure_1 = HermesBuiltin.apply(items1, undefined);
    }
    return closure_1;
  };
}

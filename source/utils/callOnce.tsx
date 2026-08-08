// Module ID: 7129
// Function ID: 7130
// Name: callOnce
// Dependencies: [2]
// Exports: callOnce

// Module 7129 (callOnce)
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

// Module ID: 7050
// Function ID: 7051
// Name: callOnce
// Dependencies: [2]
// Exports: callOnce

// Module 7050 (callOnce)
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

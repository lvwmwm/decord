// Module ID: 6910
// Function ID: 55074
// Name: callOnce
// Dependencies: [2]
// Exports: callOnce

// Module 6910 (callOnce)
const result = require("set").fileFinishedImporting("utils/callOnce.tsx");

export function callOnce(arg0) {
  let closure_0 = arg0;
  let c2 = false;
  return (arg0) => {
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

// Module ID: 7087
// Function ID: 7088
// Name: callOnce
// Dependencies: [2]
// Exports: callOnce

// Module 7087 (callOnce)
import size from "module_2" /* 2 */;

let closure_1;

const result = size.fileFinishedImporting("utils/callOnce.tsx");

export function callOnce(arg0) {
  let closure_0 = arg0;
  let c2 = false;
  return () => {
    const items = [...arguments];
    const tmp2 = c2;
    if (!tmp2) {
      c2 = true;
      const items1 = [];
      HermesBuiltin.arraySpread(items1, items, 0);
      closure_1 = HermesBuiltin.apply(closure_0, items1, undefined);
    }
    return closure_1;
  };
}

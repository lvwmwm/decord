// Module ID: 16549
// Function ID: 16550
// Name: createICYMIStyles
// Dependencies: [19, 4636, 16550, 2]
// Exports: createICYMIStyles

// Module 16549 (createICYMIStyles)
import ICYMIContext from "ICYMIContext" /* 16550 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/createICYMIStyles.tsx");

export const createICYMIStyles = function createICYMIStyles(rect) {
  _require = require("createStyles").createStyles(rect);
  return () => {
    const items = [...arguments];
    const useContext = noop.useContext;
    const items1 = [useContext(ICYMIContext.ICYMIContext), ...items];
    return closure_0(...items);
  };
};

// Module ID: 16794
// Function ID: 16795
// Name: createICYMIStyles
// Dependencies: [19, 4758, 16795, 2]
// Exports: createICYMIStyles

// Module 16794 (createICYMIStyles)
import ICYMIContext from "ICYMIContext" /* 16795 */;
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

// Module ID: 16296
// Function ID: 16297
// Name: createICYMIStyles
// Dependencies: [19, 4866, 16297, 2]
// Exports: createICYMIStyles

// Module 16296 (createICYMIStyles)
import ICYMIContext from "ICYMIContext" /* 16297 */;
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

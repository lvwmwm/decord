// Module ID: 16095
// Function ID: 16096
// Name: createICYMIStyles
// Dependencies: [19, 4836, 16096, 2]
// Exports: createICYMIStyles

// Module 16095 (createICYMIStyles)
import ICYMIContext from "ICYMIContext" /* 16096 */;
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

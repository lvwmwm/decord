// Module ID: 16795
// Function ID: 16796
// Name: createICYMIStyles
// Dependencies: [19, 4788, 16796, 2]
// Exports: createICYMIStyles

// Module 16795 (createICYMIStyles)
import ICYMIContext from "ICYMIContext" /* 16796 */;
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

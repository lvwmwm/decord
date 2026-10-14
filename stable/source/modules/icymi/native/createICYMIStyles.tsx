// Module ID: 16394
// Function ID: 16395
// Name: createICYMIStyles
// Dependencies: [19, 4890, 16395, 2]
// Exports: createICYMIStyles

// Module 16394 (createICYMIStyles)
import ICYMIContext from "ICYMIContext" /* 16395 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/icymi/native/createICYMIStyles.tsx");

export const createICYMIStyles = function createICYMIStyles(rect) {
  let closure_0;
  const obj = require("createStyles");
  _require = obj.createStyles(rect);
  return () => {
    const items = [...arguments];
    const useContext = react.useContext;
    const items1 = [useContext(ICYMIContext.ICYMIContext), ...items];
    return closure_0(...items);
  };
};

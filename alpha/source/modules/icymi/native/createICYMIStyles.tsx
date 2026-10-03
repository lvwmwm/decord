// Module ID: 16390
// Function ID: 16391
// Name: createICYMIStyles
// Dependencies: [19, 4890, 16391, 2]
// Exports: createICYMIStyles

// Module 16390 (createICYMIStyles)
import ICYMIContext from "ICYMIContext" /* 16391 */;
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

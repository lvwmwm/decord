// Module ID: 17895
// Function ID: 17896
// Name: createICYMIStyles
// Dependencies: [19, 4971, 17896, 2]
// Exports: createICYMIStyles

// Module 17895 (createICYMIStyles)
import ICYMIContext from "ICYMIContext" /* 17896 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/icymi/native/createICYMIStyles.tsx");

export const createICYMIStyles = function createICYMIStyles(rect) {
  let closure_0;
  const obj = require("createStyles");
  _require = obj.createStyles(rect);
  return function useStyles() {
    const items = [...arguments];
    const useContext = react.useContext;
    const items1 = [useContext(ICYMIContext.ICYMIContext), ...items];
    return closure_0(...items);
  };
};

// Module ID: 17646
// Function ID: 17647
// Name: createICYMIStyles
// Dependencies: [19, 4945, 17647, 2]
// Exports: createICYMIStyles

// Module 17646 (createICYMIStyles)
import ICYMIContext from "ICYMIContext" /* 17647 */;
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

// Module ID: 17525
// Function ID: 17526
// Name: createICYMIStyles
// Dependencies: [19, 5153, 17526, 2]
// Exports: createICYMIStyles

// Module 17525 (createICYMIStyles)
import ICYMIContext from "ICYMIContext" /* 17526 */;
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

// Module ID: 19331
// Function ID: 19332
// Name: createICYMIStyles
// Dependencies: [19, 5310, 19332, 2]
// Exports: createICYMIStyles

// Module 19331 (createICYMIStyles)
import ICYMIContext from "ICYMIContext" /* 19332 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/icymi/native/createICYMIStyles.tsx");

export function createICYMIStyles(rect) {
  let closure_0;
  const obj = require("createStyles");
  _require = obj.createStyles(rect);
  return function useStyles() {
    const items = [...arguments];
    const useContext = react.useContext;
    const items1 = [useContext(ICYMIContext.ICYMIContext), ...items];
    return closure_0(...items);
  };
}

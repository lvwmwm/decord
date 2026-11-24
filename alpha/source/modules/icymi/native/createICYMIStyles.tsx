// Module ID: 18132
// Function ID: 18133
// Name: createICYMIStyles
// Dependencies: [19, 4917, 18133, 2]
// Exports: createICYMIStyles

// Module 18132 (createICYMIStyles)
import ICYMIContext from "ICYMIContext" /* 18133 */;
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

// Module ID: 16376
// Function ID: 16377
// Name: createICYMIStyles
// Dependencies: [19, 4481, 16377, 2]
// Exports: createICYMIStyles

// Module 16376 (createICYMIStyles)
import closure_2 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/icymi/native/createICYMIStyles.tsx");

export const createICYMIStyles = function createICYMIStyles(createCacheKey) {
  _require = _require(4481).createStyles(createCacheKey);
  return () => {
    const items = [...arguments];
    const useContext = closure_1_2.useContext;
    const items1 = [useContext(callback(closure_1_1[2]).ICYMIContext), ...items];
    return callback(...items);
  };
};

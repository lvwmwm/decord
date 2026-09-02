// Module ID: 16271
// Function ID: 16272
// Name: createICYMIStyles
// Dependencies: [19, 4478, 16272, 2]
// Exports: createICYMIStyles

// Module 16271 (createICYMIStyles)
import closure_2 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/icymi/native/createICYMIStyles.tsx");

export const createICYMIStyles = function createICYMIStyles(createCacheKey) {
  _require = _require(4478).createStyles(createCacheKey);
  return () => {
    const items = [...arguments];
    const useContext = closure_1_2.useContext;
    const items1 = [useContext(callback(closure_1_1[2]).ICYMIContext), ...items];
    return callback(...items);
  };
};

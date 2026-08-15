// Module ID: 15708
// Function ID: 15709
// Name: createICYMIStyles
// Dependencies: [19, 4661, 15709, 2]
// Exports: createICYMIStyles

// Module 15708 (createICYMIStyles)
import noop from "noop";

const require = arg1;
const result = require("context").fileFinishedImporting("modules/icymi/native/createICYMIStyles.tsx");

export const createICYMIStyles = function createICYMIStyles(createCacheKey) {
  _require = _require(4661).createStyles(createCacheKey);
  return () => {
    const items = [...arguments];
    const useContext = outer1_2.useContext;
    const items1 = [useContext(callback(outer1_1[2]).ICYMIContext), ...items];
    return callback(...items);
  };
};

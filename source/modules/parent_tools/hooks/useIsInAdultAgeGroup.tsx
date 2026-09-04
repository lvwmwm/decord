// Module ID: 8576
// Function ID: 8577
// Name: useIsInAdultAgeGroup
// Dependencies: [7470, 586, 2]
// Exports: default

// Module 8576 (useIsInAdultAgeGroup)
import initialize from "initialize" /* 586 */;
import closure_2 from "freshTeenActivityWithMap" /* 7470 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  const items = [closure_2];
  return "adult" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};

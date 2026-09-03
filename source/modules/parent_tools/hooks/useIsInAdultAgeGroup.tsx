// Module ID: 8792
// Function ID: 8793
// Name: useIsInAdultAgeGroup
// Dependencies: [7292, 586, 2]
// Exports: default

// Module 8792 (useIsInAdultAgeGroup)
import initialize from "initialize" /* 586 */;
import closure_2 from "freshTeenActivityWithMap" /* 7292 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  const items = [closure_2];
  return "adult" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};

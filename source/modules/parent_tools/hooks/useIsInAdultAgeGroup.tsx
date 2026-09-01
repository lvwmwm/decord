// Module ID: 8773
// Function ID: 8774
// Name: useIsInAdultAgeGroup
// Dependencies: [7282, 589, 2]
// Exports: default

// Module 8773 (useIsInAdultAgeGroup)
import initialize from "initialize" /* 589 */;
import closure_2 from "freshTeenActivityWithMap" /* 7282 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  const items = [closure_2];
  return "adult" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};

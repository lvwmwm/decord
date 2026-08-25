// Module ID: 7481
// Function ID: 7482
// Name: useIsInAdultAgeGroup
// Dependencies: [7143, 589, 2]
// Exports: default

// Module 7481 (useIsInAdultAgeGroup)
import initialize from "initialize" /* 589 */;
import closure_2 from "freshTeenActivityWithMap" /* 7143 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  const items = [closure_2];
  return "adult" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};

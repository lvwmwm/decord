// Module ID: 14699
// Function ID: 14700
// Name: useUserAgeGroup
// Dependencies: [7291, 586, 2]
// Exports: default

// Module 14699 (useUserAgeGroup)
import initialize from "initialize" /* 586 */;
import closure_2 from "freshTeenActivityWithMap" /* 7291 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};

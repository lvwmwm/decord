// Module ID: 14795
// Function ID: 14796
// Name: useUserAgeGroup
// Dependencies: [7470, 586, 2]
// Exports: default

// Module 14795 (useUserAgeGroup)
import initialize from "initialize" /* 586 */;
import closure_2 from "freshTeenActivityWithMap" /* 7470 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};

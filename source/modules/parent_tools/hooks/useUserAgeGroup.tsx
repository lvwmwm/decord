// Module ID: 14295
// Function ID: 14296
// Name: useUserAgeGroup
// Dependencies: [5301, 589, 2]
// Exports: default

// Module 14295 (useUserAgeGroup)
import initialize from "initialize" /* 589 */;
import closure_2 from "freshTeenActivityWithMap" /* 5301 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};

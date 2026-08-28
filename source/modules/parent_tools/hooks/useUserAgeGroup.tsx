// Module ID: 14409
// Function ID: 14410
// Name: useUserAgeGroup
// Dependencies: [7229, 589, 2]
// Exports: default

// Module 14409 (useUserAgeGroup)
import initialize from "initialize" /* 589 */;
import closure_2 from "freshTeenActivityWithMap" /* 7229 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};

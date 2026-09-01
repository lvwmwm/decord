// Module ID: 14517
// Function ID: 14518
// Name: useUserIsTeenAgeGroup
// Dependencies: [7282, 589, 2]
// Exports: default

// Module 14517 (useUserIsTeenAgeGroup)
import initialize from "initialize" /* 589 */;
import closure_2 from "freshTeenActivityWithMap" /* 7282 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  const items = [closure_2];
  return "teen" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};

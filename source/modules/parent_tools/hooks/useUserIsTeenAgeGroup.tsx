// Module ID: 14740
// Function ID: 14741
// Name: useUserIsTeenAgeGroup
// Dependencies: [7291, 586, 2]
// Exports: default

// Module 14740 (useUserIsTeenAgeGroup)
import initialize from "initialize" /* 586 */;
import closure_2 from "freshTeenActivityWithMap" /* 7291 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  const items = [closure_2];
  return "teen" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};

// Module ID: 14755
// Function ID: 14756
// Name: useUserIsTeenAgeGroup
// Dependencies: [7292, 586, 2]
// Exports: default

// Module 14755 (useUserIsTeenAgeGroup)
import initialize from "initialize" /* 586 */;
import closure_2 from "freshTeenActivityWithMap" /* 7292 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  const items = [closure_2];
  return "teen" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};

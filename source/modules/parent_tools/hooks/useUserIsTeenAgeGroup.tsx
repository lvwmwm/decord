// Module ID: 14336
// Function ID: 14337
// Name: useUserIsTeenAgeGroup
// Dependencies: [5301, 589, 2]
// Exports: default

// Module 14336 (useUserIsTeenAgeGroup)
import initialize from "initialize" /* 589 */;
import closure_2 from "freshTeenActivityWithMap" /* 5301 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  const items = [closure_2];
  return "teen" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};

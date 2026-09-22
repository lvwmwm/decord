// Module ID: 15196
// Function ID: 15197
// Name: useUserIsTeenAgeGroup
// Dependencies: [7782, 504, 2]
// Exports: default

// Module 15196 (useUserIsTeenAgeGroup)
import initialize from "initialize" /* 504 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7782 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  const items = [FamilyCenterStore];
  return "teen" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};

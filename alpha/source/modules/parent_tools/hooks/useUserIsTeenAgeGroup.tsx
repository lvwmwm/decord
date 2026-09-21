// Module ID: 15189
// Function ID: 15190
// Name: useUserIsTeenAgeGroup
// Dependencies: [7779, 504, 2]
// Exports: default

// Module 15189 (useUserIsTeenAgeGroup)
import initialize from "initialize" /* 504 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7779 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  const items = [FamilyCenterStore];
  return "teen" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};

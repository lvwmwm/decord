// Module ID: 15155
// Function ID: 15156
// Name: useUserAgeGroup
// Dependencies: [7782, 504, 2]
// Exports: default

// Module 15155 (useUserAgeGroup)
import initialize from "initialize" /* 504 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7782 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  const items = [FamilyCenterStore];
  return initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};

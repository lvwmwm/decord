// Module ID: 15148
// Function ID: 15149
// Name: useUserAgeGroup
// Dependencies: [7779, 504, 2]
// Exports: default

// Module 15148 (useUserAgeGroup)
import initialize from "initialize" /* 504 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7779 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  const items = [FamilyCenterStore];
  return initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};

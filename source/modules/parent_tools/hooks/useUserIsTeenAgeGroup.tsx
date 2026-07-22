// Module ID: 13700
// Function ID: 103684
// Name: useUserIsTeenAgeGroup
// Dependencies: []
// Exports: default

// Module 13700 (useUserIsTeenAgeGroup)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  const items = [closure_2];
  return "teen" === arg1(dependencyMap[1]).useStateFromStores(items, () => ageGroup.getAgeGroup());
};

// Module ID: 13693
// Function ID: 103651
// Name: useUserIsTeenAgeGroup
// Dependencies: []
// Exports: default

// Module 13693 (useUserIsTeenAgeGroup)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  const items = [closure_2];
  return "teen" === arg1(dependencyMap[1]).useStateFromStores(items, () => ageGroup.getAgeGroup());
};

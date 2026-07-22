// Module ID: 10589
// Function ID: 82638
// Name: useCurrentEmbeddedActivity
// Dependencies: []
// Exports: default

// Module 10589 (useCurrentEmbeddedActivity)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
};

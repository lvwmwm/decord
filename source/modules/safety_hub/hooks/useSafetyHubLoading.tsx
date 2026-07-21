// Module ID: 13532
// Function ID: 102670
// Name: useIsSafetyHubLoading
// Dependencies: []
// Exports: default

// Module 13532 (useIsSafetyHubLoading)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => fetching.isFetching());
};

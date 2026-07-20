// Module ID: 11039
// Function ID: 85932
// Name: useSafetyHubInitialized
// Dependencies: []
// Exports: useSafetyHubInitialized

// Module 11039 (useSafetyHubInitialized)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export const useSafetyHubInitialized = function useSafetyHubInitialized() {
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => initialized.isInitialized());
};

// Module ID: 14408
// Function ID: 108692
// Name: useAdPersonalizationTogglesDisabled
// Dependencies: []
// Exports: useAdPersonalizationTogglesDisabled

// Module 14408 (useAdPersonalizationTogglesDisabled)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = function useAdPersonalizationTogglesDisabled() {
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
};

// Module ID: 14584
// Function ID: 111300
// Name: useAdPersonalizationTogglesDisabled
// Dependencies: [12673, 566, 2]
// Exports: useAdPersonalizationTogglesDisabled

// Module 14584 (useAdPersonalizationTogglesDisabled)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = function useAdPersonalizationTogglesDisabled() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.isTogglesDisabled());
};

// Module ID: 14522
// Function ID: 110845
// Name: useAdPersonalizationTogglesDisabled
// Dependencies: [12610, 566, 2]
// Exports: useAdPersonalizationTogglesDisabled

// Module 14522 (useAdPersonalizationTogglesDisabled)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = function useAdPersonalizationTogglesDisabled() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.isTogglesDisabled());
};

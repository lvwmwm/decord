// Module ID: 14770
// Function ID: 14771
// Name: useAdPersonalizationTogglesDisabled
// Dependencies: [12853, 589, 2]
// Exports: useAdPersonalizationTogglesDisabled

// Module 14770 (useAdPersonalizationTogglesDisabled)
import reset from "reset";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = function useAdPersonalizationTogglesDisabled() {
  const items = [reset];
  return require(589) /* initialize */.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
};

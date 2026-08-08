// Module ID: 14874
// Function ID: 14875
// Name: useAdPersonalizationTogglesDisabled
// Dependencies: [12947, 589, 2]
// Exports: useAdPersonalizationTogglesDisabled

// Module 14874 (useAdPersonalizationTogglesDisabled)
import reset from "reset";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = function useAdPersonalizationTogglesDisabled() {
  const items = [reset];
  return require(589) /* initialize */.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
};

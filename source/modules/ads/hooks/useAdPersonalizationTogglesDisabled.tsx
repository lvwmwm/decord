// Module ID: 15780
// Function ID: 15781
// Name: useAdPersonalizationTogglesDisabled
// Dependencies: [13608, 586, 2]
// Exports: useAdPersonalizationTogglesDisabled

// Module 15780 (useAdPersonalizationTogglesDisabled)
import initialize from "initialize" /* 586 */;
import closure_2 from "reset" /* 13608 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = function useAdPersonalizationTogglesDisabled() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
};

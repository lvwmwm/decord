// Module ID: 15684
// Function ID: 15685
// Name: useAdPersonalizationTogglesDisabled
// Dependencies: [13560, 586, 2]
// Exports: useAdPersonalizationTogglesDisabled

// Module 15684 (useAdPersonalizationTogglesDisabled)
import initialize from "initialize" /* 586 */;
import closure_2 from "reset" /* 13560 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = function useAdPersonalizationTogglesDisabled() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
};

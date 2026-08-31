// Module ID: 15420
// Function ID: 15421
// Name: useAdPersonalizationTogglesDisabled
// Dependencies: [13303, 589, 2]
// Exports: useAdPersonalizationTogglesDisabled

// Module 15420 (useAdPersonalizationTogglesDisabled)
import initialize from "initialize" /* 589 */;
import closure_2 from "reset" /* 13303 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = function useAdPersonalizationTogglesDisabled() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
};

// Module ID: 15092
// Function ID: 15093
// Name: useAdPersonalizationTogglesDisabled
// Dependencies: [13151, 589, 2]
// Exports: useAdPersonalizationTogglesDisabled

// Module 15092 (useAdPersonalizationTogglesDisabled)
import initialize from "initialize" /* 589 */;
import closure_2 from "reset" /* 13151 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = function useAdPersonalizationTogglesDisabled() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
};

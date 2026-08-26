// Module ID: 15171
// Function ID: 15172
// Name: useAdPersonalizationTogglesDisabled
// Dependencies: [13224, 589, 2]
// Exports: useAdPersonalizationTogglesDisabled

// Module 15171 (useAdPersonalizationTogglesDisabled)
import initialize from "initialize" /* 589 */;
import closure_2 from "reset" /* 13224 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = function useAdPersonalizationTogglesDisabled() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
};

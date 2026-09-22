// Module ID: 16192
// Function ID: 16193
// Name: useAdPersonalizationTogglesDisabled
// Dependencies: [13957, 504, 2]
// Exports: useAdPersonalizationTogglesDisabled

// Module 16192 (useAdPersonalizationTogglesDisabled)
import initialize from "initialize" /* 504 */;
import AdPersonalizationStore from "AdPersonalizationStore" /* 13957 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = function useAdPersonalizationTogglesDisabled() {
  const items = [AdPersonalizationStore];
  return initialize.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
};

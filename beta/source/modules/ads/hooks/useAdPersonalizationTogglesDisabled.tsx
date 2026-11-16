// Module ID: 18550
// Function ID: 18551
// Name: useAdPersonalizationTogglesDisabled
// Dependencies: [16179, 504, 2]
// Exports: useAdPersonalizationTogglesDisabled

// Module 18550 (useAdPersonalizationTogglesDisabled)
import get_initialized from "get initialized" /* 504 */;
import AdPersonalizationStore from "AdPersonalizationStore" /* 16179 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export function useAdPersonalizationTogglesDisabled() {
  let togglesDisabled;
  const items = [AdPersonalizationStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
}

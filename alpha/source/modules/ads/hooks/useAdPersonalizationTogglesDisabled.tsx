// Module ID: 18148
// Function ID: 18149
// Name: useAdPersonalizationTogglesDisabled
// Dependencies: [15817, 504, 2]
// Exports: useAdPersonalizationTogglesDisabled

// Module 18148 (useAdPersonalizationTogglesDisabled)
import get_initialized from "get initialized" /* 504 */;
import AdPersonalizationStore from "AdPersonalizationStore" /* 15817 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export function useAdPersonalizationTogglesDisabled() {
  let togglesDisabled;
  const items = [AdPersonalizationStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
}

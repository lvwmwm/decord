// Module ID: 17348
// Function ID: 17349
// Name: useAdPersonalizationTogglesDisabled
// Dependencies: [14954, 504, 2]
// Exports: useAdPersonalizationTogglesDisabled

// Module 17348 (useAdPersonalizationTogglesDisabled)
import get_initialized from "get initialized" /* 504 */;
import AdPersonalizationStore from "AdPersonalizationStore" /* 14954 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export function useAdPersonalizationTogglesDisabled() {
  let togglesDisabled;
  const items = [AdPersonalizationStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
}

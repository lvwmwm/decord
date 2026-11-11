// Module ID: 6688
// Function ID: 6689
// Name: useDisplayNameStylesEnabled
// Dependencies: [19, 5244, 504, 6689, 2]
// Exports: useDisplayNameStylesEnabled

// Module 6688 (useDisplayNameStylesEnabled)
import react from "react" /* 19 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 6689 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import size from "module_2" /* 2 */;

const useContext = react.useContext;
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export function useDisplayNameStylesEnabled() {
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const overrideSettings = obj.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled) || useContext(react2.DisplayNameStylesContext).overrideSettings;
  return overrideSettings;
}

// Module ID: 6251
// Function ID: 6252
// Name: useDisplayNameStylesEnabled
// Dependencies: [19, 4824, 504, 6252, 2]
// Exports: useDisplayNameStylesEnabled

// Module 6251 (useDisplayNameStylesEnabled)
import react from "react" /* 19 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 6252 */;
import AccessibilityStore from "AccessibilityStore" /* 4824 */;
import size from "module_2" /* 2 */;

const useContext = react.useContext;
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export function useDisplayNameStylesEnabled() {
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const overrideSettings = obj.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled) || useContext(react2.DisplayNameStylesContext).overrideSettings;
  return overrideSettings;
}

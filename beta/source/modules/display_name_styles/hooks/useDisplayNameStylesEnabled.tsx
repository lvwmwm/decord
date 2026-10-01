// Module ID: 5085
// Function ID: 5086
// Name: useDisplayNameStylesEnabled
// Dependencies: [19, 4825, 504, 5086, 2]
// Exports: useDisplayNameStylesEnabled

// Module 5085 (useDisplayNameStylesEnabled)
import react from "react" /* 19 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 5086 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size from "module_2" /* 2 */;

const useContext = react.useContext;
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = function useDisplayNameStylesEnabled() {
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const overrideSettings = obj.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled) || useContext(react2.DisplayNameStylesContext).overrideSettings;
  return overrideSettings;
};

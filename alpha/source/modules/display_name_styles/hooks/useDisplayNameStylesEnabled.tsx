// Module ID: 5281
// Function ID: 5282
// Name: useDisplayNameStylesEnabled
// Dependencies: [19, 4855, 504, 5282, 2]
// Exports: useDisplayNameStylesEnabled

// Module 5281 (useDisplayNameStylesEnabled)
import _mod19 from "module_19" /* 19 */;
import initialize from "initialize" /* 504 */;
import DisplayNameStylesContext from "DisplayNameStylesContext" /* 5282 */;
import AccessibilityStore from "AccessibilityStore" /* 4855 */;
import size from "module_2" /* 2 */;

const useContext = _mod19.useContext;
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = function useDisplayNameStylesEnabled() {
  const items = [AccessibilityStore];
  let overrideSettings = initialize.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled);
  if (!overrideSettings) {
    overrideSettings = useContext(DisplayNameStylesContext.DisplayNameStylesContext).overrideSettings;
  }
  return overrideSettings;
};

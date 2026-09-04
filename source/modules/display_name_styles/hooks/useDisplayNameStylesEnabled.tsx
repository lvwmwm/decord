// Module ID: 4756
// Function ID: 4757
// Name: useDisplayNameStylesEnabled
// Dependencies: [19, 4473, 586, 4757, 2]
// Exports: useDisplayNameStylesEnabled

// Module 4756 (useDisplayNameStylesEnabled)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import initialize from "initialize" /* 586 */;
import context from "context" /* 4757 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4473 */;

const useContext = noop.useContext;
const result = set.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = function useDisplayNameStylesEnabled(arg0) {
  const items = [closure_3];
  let overrideSettings = initialize.useStateFromStores(items, () => obj.displayNameStylesEnabled);
  if (!overrideSettings) {
    overrideSettings = useContext(context.DisplayNameStylesContext).overrideSettings;
  }
  return overrideSettings;
};

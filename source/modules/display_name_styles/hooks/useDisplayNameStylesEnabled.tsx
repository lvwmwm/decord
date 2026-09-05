// Module ID: 4795
// Function ID: 4796
// Name: useDisplayNameStylesEnabled
// Dependencies: [19, 4552, 504, 4796, 2]
// Exports: useDisplayNameStylesEnabled

// Module 4795 (useDisplayNameStylesEnabled)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import initialize from "initialize" /* 504 */;
import context from "context" /* 4796 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;

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

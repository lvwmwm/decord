// Module ID: 4716
// Function ID: 4717
// Name: useDisplayNameStylesEnabled
// Dependencies: [19, 4440, 589, 4717, 2]
// Exports: useDisplayNameStylesEnabled

// Module 4716 (useDisplayNameStylesEnabled)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import context from "context" /* 4717 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4440 */;

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

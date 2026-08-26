// Module ID: 4700
// Function ID: 4701
// Name: useDisplayNameStylesEnabled
// Dependencies: [19, 4436, 589, 4701, 2]
// Exports: useDisplayNameStylesEnabled

// Module 4700 (useDisplayNameStylesEnabled)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import context from "context" /* 4701 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4436 */;

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

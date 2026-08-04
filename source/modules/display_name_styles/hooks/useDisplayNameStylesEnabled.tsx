// Module ID: 4515
// Function ID: 4516
// Name: useDisplayNameStylesEnabled
// Dependencies: [19, 4277, 589, 4516, 2]
// Exports: useDisplayNameStylesEnabled

// Module 4515 (useDisplayNameStylesEnabled)
import { useContext } from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";

const result = require("initialize").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = function useDisplayNameStylesEnabled(arg0) {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  let overrideSettings = require(589) /* initialize */.useStateFromStores(items, () => obj.displayNameStylesEnabled);
  if (!overrideSettings) {
    overrideSettings = useContext(require(4516) /* context */.DisplayNameStylesContext).overrideSettings;
  }
  return overrideSettings;
};

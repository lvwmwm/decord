// Module ID: 4574
// Function ID: 4575
// Name: useDisplayNameStylesEnabled
// Dependencies: [19, 4336, 589, 4575, 2]
// Exports: useDisplayNameStylesEnabled

// Module 4574 (useDisplayNameStylesEnabled)
import { useContext } from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";

const result = require("initialize").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = function useDisplayNameStylesEnabled(arg0) {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  let overrideSettings = require(589) /* initialize */.useStateFromStores(items, () => obj.displayNameStylesEnabled);
  if (!overrideSettings) {
    overrideSettings = useContext(require(4575) /* context */.DisplayNameStylesContext).overrideSettings;
  }
  return overrideSettings;
};

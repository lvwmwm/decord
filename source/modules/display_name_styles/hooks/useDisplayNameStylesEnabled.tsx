// Module ID: 4532
// Function ID: 4533
// Name: useDisplayNameStylesEnabled
// Dependencies: [19, 4294, 589, 4533, 2]
// Exports: useDisplayNameStylesEnabled

// Module 4532 (useDisplayNameStylesEnabled)
import { useContext } from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";

const result = require("initialize").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = function useDisplayNameStylesEnabled(arg0) {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  let overrideSettings = require(589) /* initialize */.useStateFromStores(items, () => obj.displayNameStylesEnabled);
  if (!overrideSettings) {
    overrideSettings = useContext(require(4533) /* context */.DisplayNameStylesContext).overrideSettings;
  }
  return overrideSettings;
};

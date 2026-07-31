// Module ID: 4424
// Function ID: 4425
// Name: useDisplayNameStylesEnabled
// Dependencies: [19, 4185, 589, 4425, 2]
// Exports: useDisplayNameStylesEnabled

// Module 4424 (useDisplayNameStylesEnabled)
import { useContext } from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";

const result = require("initialize").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = function useDisplayNameStylesEnabled(arg0) {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  let overrideSettings = require(589) /* initialize */.useStateFromStores(items, () => obj.displayNameStylesEnabled);
  if (!overrideSettings) {
    overrideSettings = useContext(require(4425) /* context */.DisplayNameStylesContext).overrideSettings;
  }
  return overrideSettings;
};

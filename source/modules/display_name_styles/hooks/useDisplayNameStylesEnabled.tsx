// Module ID: 4816
// Function ID: 4817
// Name: useDisplayNameStylesEnabled
// Dependencies: [19, 4662, 589, 4817, 2]
// Exports: useDisplayNameStylesEnabled

// Module 4816 (useDisplayNameStylesEnabled)
import { useContext } from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";

const result = require("initialize").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = function useDisplayNameStylesEnabled(arg0) {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  let overrideSettings = require(589) /* initialize */.useStateFromStores(items, () => obj.displayNameStylesEnabled);
  if (!overrideSettings) {
    overrideSettings = useContext(require(4817) /* context */.DisplayNameStylesContext).overrideSettings;
  }
  return overrideSettings;
};

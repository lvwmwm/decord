// Module ID: 4486
// Function ID: 4487
// Name: useDisplayNameStylesEnabled
// Dependencies: [19, 4247, 589, 4487, 2]
// Exports: useDisplayNameStylesEnabled

// Module 4486 (useDisplayNameStylesEnabled)
import { useContext } from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";

const result = require("initialize").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = function useDisplayNameStylesEnabled(arg0) {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  let overrideSettings = require(589) /* initialize */.useStateFromStores(items, () => obj.displayNameStylesEnabled);
  if (!overrideSettings) {
    overrideSettings = useContext(require(4487) /* context */.DisplayNameStylesContext).overrideSettings;
  }
  return overrideSettings;
};

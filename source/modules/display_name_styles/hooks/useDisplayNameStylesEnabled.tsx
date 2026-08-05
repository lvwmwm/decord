// Module ID: 4485
// Function ID: 4486
// Name: useDisplayNameStylesEnabled
// Dependencies: [19, 4247, 589, 4486, 2]
// Exports: useDisplayNameStylesEnabled

// Module 4485 (useDisplayNameStylesEnabled)
import { useContext } from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";

const result = require("initialize").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = function useDisplayNameStylesEnabled(arg0) {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  let overrideSettings = require(589) /* initialize */.useStateFromStores(items, () => obj.displayNameStylesEnabled);
  if (!overrideSettings) {
    overrideSettings = useContext(require(4486) /* context */.DisplayNameStylesContext).overrideSettings;
  }
  return overrideSettings;
};

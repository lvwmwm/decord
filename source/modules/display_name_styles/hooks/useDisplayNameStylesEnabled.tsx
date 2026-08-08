// Module ID: 4534
// Function ID: 4535
// Name: useDisplayNameStylesEnabled
// Dependencies: [19, 4295, 589, 4535, 2]
// Exports: useDisplayNameStylesEnabled

// Module 4534 (useDisplayNameStylesEnabled)
import { useContext } from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";

const result = require("initialize").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = function useDisplayNameStylesEnabled(arg0) {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  let overrideSettings = require(589) /* initialize */.useStateFromStores(items, () => obj.displayNameStylesEnabled);
  if (!overrideSettings) {
    overrideSettings = useContext(require(4535) /* context */.DisplayNameStylesContext).overrideSettings;
  }
  return overrideSettings;
};

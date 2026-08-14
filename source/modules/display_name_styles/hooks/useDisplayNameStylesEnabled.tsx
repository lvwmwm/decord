// Module ID: 4597
// Function ID: 4598
// Name: useDisplayNameStylesEnabled
// Dependencies: [19, 4334, 589, 4598, 2]
// Exports: useDisplayNameStylesEnabled

// Module 4597 (useDisplayNameStylesEnabled)
import { useContext } from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";

const result = require("initialize").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = function useDisplayNameStylesEnabled(arg0) {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  let overrideSettings = require(589) /* initialize */.useStateFromStores(items, () => obj.displayNameStylesEnabled);
  if (!overrideSettings) {
    overrideSettings = useContext(require(4598) /* context */.DisplayNameStylesContext).overrideSettings;
  }
  return overrideSettings;
};

// Module ID: 4363
// Function ID: 38710
// Name: useDisplayNameStylesEnabled
// Dependencies: [31, 4123, 566, 4364, 2]
// Exports: useDisplayNameStylesEnabled

// Module 4363 (useDisplayNameStylesEnabled)
import { useContext } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("initialize").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = function useDisplayNameStylesEnabled(arg0) {
  const items = [_isNativeReflectConstruct];
  let overrideSettings = require(566) /* initialize */.useStateFromStores(items, () => outer1_3.displayNameStylesEnabled);
  if (!overrideSettings) {
    overrideSettings = useContext(require(4364) /* context */.DisplayNameStylesContext).overrideSettings;
  }
  return overrideSettings;
};

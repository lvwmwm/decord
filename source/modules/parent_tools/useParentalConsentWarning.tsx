// Module ID: 13769
// Function ID: 105595
// Name: useParentalConsentWarning
// Dependencies: [13770, 566, 2]
// Exports: useParentalConsentWarning

// Module 13769 (useParentalConsentWarning)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getWarning());
};

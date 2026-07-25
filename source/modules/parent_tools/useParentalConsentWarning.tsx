// Module ID: 13831
// Function ID: 106046
// Name: useParentalConsentWarning
// Dependencies: [13832, 566, 2]
// Exports: useParentalConsentWarning

// Module 13831 (useParentalConsentWarning)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getWarning());
};

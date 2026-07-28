// Module ID: 13876
// Function ID: 106224
// Name: useParentalConsentWarning
// Dependencies: [13877, 566, 2]
// Exports: useParentalConsentWarning

// Module 13876 (useParentalConsentWarning)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getWarning());
};

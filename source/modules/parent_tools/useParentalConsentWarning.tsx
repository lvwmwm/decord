// Module ID: 14223
// Function ID: 14224
// Name: useParentalConsentWarning
// Dependencies: [14224, 589, 2]
// Exports: useParentalConsentWarning

// Module 14223 (useParentalConsentWarning)
import initialize from "initialize";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [initialize];
  return require(589) /* initialize */.useStateFromStores(items, () => warning.getWarning());
};

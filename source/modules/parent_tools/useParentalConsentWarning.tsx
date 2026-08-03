// Module ID: 13983
// Function ID: 13984
// Name: useParentalConsentWarning
// Dependencies: [13984, 589, 2]
// Exports: useParentalConsentWarning

// Module 13983 (useParentalConsentWarning)
import initialize from "initialize";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [initialize];
  return require(589) /* initialize */.useStateFromStores(items, () => warning.getWarning());
};

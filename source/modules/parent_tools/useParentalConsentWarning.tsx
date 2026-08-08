// Module ID: 14111
// Function ID: 14112
// Name: useParentalConsentWarning
// Dependencies: [14112, 589, 2]
// Exports: useParentalConsentWarning

// Module 14111 (useParentalConsentWarning)
import initialize from "initialize";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [initialize];
  return require(589) /* initialize */.useStateFromStores(items, () => warning.getWarning());
};

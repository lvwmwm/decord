// Module ID: 14178
// Function ID: 14179
// Name: useParentalConsentWarning
// Dependencies: [14179, 589, 2]
// Exports: useParentalConsentWarning

// Module 14178 (useParentalConsentWarning)
import initialize from "initialize";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [initialize];
  return require(589) /* initialize */.useStateFromStores(items, () => warning.getWarning());
};

// Module ID: 14017
// Function ID: 14018
// Name: useParentalConsentWarning
// Dependencies: [14018, 589, 2]
// Exports: useParentalConsentWarning

// Module 14017 (useParentalConsentWarning)
import initialize from "initialize";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [initialize];
  return require(589) /* initialize */.useStateFromStores(items, () => warning.getWarning());
};

// Module ID: 13990
// Function ID: 13991
// Name: useParentalConsentWarning
// Dependencies: [13991, 589, 2]
// Exports: useParentalConsentWarning

// Module 13990 (useParentalConsentWarning)
import initialize from "initialize";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [initialize];
  return require(589) /* initialize */.useStateFromStores(items, () => warning.getWarning());
};

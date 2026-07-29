// Module ID: 13897
// Function ID: 13898
// Name: useParentalConsentWarning
// Dependencies: [13898, 589, 2]
// Exports: useParentalConsentWarning

// Module 13897 (useParentalConsentWarning)
import initialize from "initialize";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [initialize];
  return require(589) /* initialize */.useStateFromStores(items, () => warning.getWarning());
};

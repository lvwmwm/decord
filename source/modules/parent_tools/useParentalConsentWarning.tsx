// Module ID: 14113
// Function ID: 14114
// Name: useParentalConsentWarning
// Dependencies: [14114, 589, 2]
// Exports: useParentalConsentWarning

// Module 14113 (useParentalConsentWarning)
import initialize from "initialize";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [initialize];
  return require(589) /* initialize */.useStateFromStores(items, () => warning.getWarning());
};

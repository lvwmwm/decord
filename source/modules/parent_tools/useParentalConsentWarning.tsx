// Module ID: 14421
// Function ID: 14422
// Name: useParentalConsentWarning
// Dependencies: [14422, 589, 2]
// Exports: useParentalConsentWarning

// Module 14421 (useParentalConsentWarning)
import initialize from "initialize" /* 589 */;
import closure_2 from "initialize" /* 14422 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => warning.getWarning());
};

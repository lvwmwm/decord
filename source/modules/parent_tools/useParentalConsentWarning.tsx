// Module ID: 14321
// Function ID: 14322
// Name: useParentalConsentWarning
// Dependencies: [14322, 589, 2]
// Exports: useParentalConsentWarning

// Module 14321 (useParentalConsentWarning)
import initialize from "initialize" /* 589 */;
import closure_2 from "initialize" /* 14322 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => warning.getWarning());
};

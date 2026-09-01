// Module ID: 14472
// Function ID: 14473
// Name: useParentalConsentWarning
// Dependencies: [14473, 589, 2]
// Exports: useParentalConsentWarning

// Module 14472 (useParentalConsentWarning)
import initialize from "initialize" /* 589 */;
import closure_2 from "initialize" /* 14473 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => warning.getWarning());
};

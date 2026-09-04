// Module ID: 14791
// Function ID: 14792
// Name: useParentalConsentWarning
// Dependencies: [14792, 586, 2]
// Exports: useParentalConsentWarning

// Module 14791 (useParentalConsentWarning)
import initialize from "initialize" /* 586 */;
import closure_2 from "initialize" /* 14792 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => warning.getWarning());
};

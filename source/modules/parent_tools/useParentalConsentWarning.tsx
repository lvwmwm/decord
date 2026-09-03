// Module ID: 14710
// Function ID: 14711
// Name: useParentalConsentWarning
// Dependencies: [14711, 586, 2]
// Exports: useParentalConsentWarning

// Module 14710 (useParentalConsentWarning)
import initialize from "initialize" /* 586 */;
import closure_2 from "initialize" /* 14711 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => warning.getWarning());
};

// Module ID: 15151
// Function ID: 15152
// Name: useParentalConsentWarning
// Dependencies: [15152, 504, 2]
// Exports: useParentalConsentWarning

// Module 15151 (useParentalConsentWarning)
import initialize from "initialize" /* 504 */;
import ParentalConsentWarningStore from "ParentalConsentWarningStore" /* 15152 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [ParentalConsentWarningStore];
  return initialize.useStateFromStores(items, () => warning.getWarning());
};

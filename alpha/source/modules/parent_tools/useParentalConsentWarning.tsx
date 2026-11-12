// Module ID: 17273
// Function ID: 17274
// Name: useParentalConsentWarning
// Dependencies: [17274, 504, 2]
// Exports: useParentalConsentWarning

// Module 17273 (useParentalConsentWarning)
import get_initialized from "get initialized" /* 504 */;
import ParentalConsentWarningStore from "ParentalConsentWarningStore" /* 17274 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export function useParentalConsentWarning() {
  let warning;
  const items = [ParentalConsentWarningStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => warning.getWarning());
}

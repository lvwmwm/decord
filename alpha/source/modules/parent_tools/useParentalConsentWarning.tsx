// Module ID: 17115
// Function ID: 17116
// Name: useParentalConsentWarning
// Dependencies: [17116, 504, 2]
// Exports: useParentalConsentWarning

// Module 17115 (useParentalConsentWarning)
import get_initialized from "get initialized" /* 504 */;
import ParentalConsentWarningStore from "ParentalConsentWarningStore" /* 17116 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export function useParentalConsentWarning() {
  let warning;
  const items = [ParentalConsentWarningStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => warning.getWarning());
}

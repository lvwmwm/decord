// Module ID: 17029
// Function ID: 17030
// Name: useParentalConsentWarning
// Dependencies: [17030, 504, 2]
// Exports: useParentalConsentWarning

// Module 17029 (useParentalConsentWarning)
import get_initialized from "get initialized" /* 504 */;
import ParentalConsentWarningStore from "ParentalConsentWarningStore" /* 17030 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export function useParentalConsentWarning() {
  let warning;
  const items = [ParentalConsentWarningStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => warning.getWarning());
}

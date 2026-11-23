// Module ID: 16168
// Function ID: 16169
// Name: useParentalConsentWarning
// Dependencies: [16169, 504, 2]
// Exports: useParentalConsentWarning

// Module 16168 (useParentalConsentWarning)
import get_initialized from "get initialized" /* 504 */;
import ParentalConsentWarningStore from "ParentalConsentWarningStore" /* 16169 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export function useParentalConsentWarning() {
  let warning;
  const items = [ParentalConsentWarningStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => warning.getWarning());
}

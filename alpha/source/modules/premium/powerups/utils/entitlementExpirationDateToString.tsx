// Module ID: 14038
// Function ID: 14039
// Name: entitlementExpirationDateToString
// Dependencies: [2189, 2]
// Exports: default

// Module 14038 (entitlementExpirationDateToString)
import LocaleStore from "LocaleStore" /* 2189 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  const date = new Date(arg0);
  return date.toLocaleDateString(LocaleStore.locale, { month: "2-digit", day: "2-digit" });
};

// Module ID: 12276
// Function ID: 12277
// Name: entitlementExpirationDateToString
// Dependencies: [2128, 2]
// Exports: default

// Module 12276 (entitlementExpirationDateToString)
import LocaleStore from "LocaleStore" /* 2128 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  const date = new Date(arg0);
  return date.toLocaleDateString(LocaleStore.locale, { month: "2-digit", day: "2-digit" });
};

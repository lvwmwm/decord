// Module ID: 14084
// Function ID: 14085
// Name: entitlementExpirationDateToString
// Dependencies: [2062, 2]
// Exports: default

// Module 14084 (entitlementExpirationDateToString)
import LocaleStore from "LocaleStore" /* 2062 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  const date = new Date(arg0);
  return date.toLocaleDateString(LocaleStore.locale, { month: "2-digit", day: "2-digit" });
};

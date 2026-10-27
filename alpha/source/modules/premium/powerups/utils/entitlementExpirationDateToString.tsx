// Module ID: 13463
// Function ID: 13464
// Name: entitlementExpirationDateToString
// Dependencies: [2065, 2]
// Exports: default

// Module 13463 (entitlementExpirationDateToString)
import LocaleStore from "LocaleStore" /* 2065 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  const date = new Date(arg0);
  return date.toLocaleDateString(LocaleStore.locale, { month: "2-digit", day: "2-digit" });
};

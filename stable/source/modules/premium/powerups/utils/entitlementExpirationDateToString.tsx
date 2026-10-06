// Module ID: 11929
// Function ID: 11930
// Name: entitlementExpirationDateToString
// Dependencies: [2115, 2]
// Exports: default

// Module 11929 (entitlementExpirationDateToString)
import LocaleStore from "LocaleStore" /* 2115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  const date = new Date(arg0);
  return date.toLocaleDateString(LocaleStore.locale, { month: "2-digit", day: "2-digit" });
};

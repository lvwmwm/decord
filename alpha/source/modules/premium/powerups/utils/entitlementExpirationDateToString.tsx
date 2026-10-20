// Module ID: 13246
// Function ID: 13247
// Name: entitlementExpirationDateToString
// Dependencies: [2069, 2]
// Exports: default

// Module 13246 (entitlementExpirationDateToString)
import LocaleStore from "LocaleStore" /* 2069 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  const date = new Date(arg0);
  return date.toLocaleDateString(LocaleStore.locale, { month: "2-digit", day: "2-digit" });
};

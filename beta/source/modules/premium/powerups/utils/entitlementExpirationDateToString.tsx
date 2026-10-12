// Module ID: 12261
// Function ID: 12262
// Name: entitlementExpirationDateToString
// Dependencies: [2129, 2]
// Exports: default

// Module 12261 (entitlementExpirationDateToString)
import LocaleStore from "LocaleStore" /* 2129 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  const date = new Date(arg0);
  return date.toLocaleDateString(LocaleStore.locale, { month: "2-digit", day: "2-digit" });
};

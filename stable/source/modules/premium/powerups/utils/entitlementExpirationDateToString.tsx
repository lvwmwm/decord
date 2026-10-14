// Module ID: 12182
// Function ID: 12183
// Name: entitlementExpirationDateToString
// Dependencies: [2116, 2]
// Exports: default

// Module 12182 (entitlementExpirationDateToString)
import LocaleStore from "LocaleStore" /* 2116 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  const date = new Date(arg0);
  return date.toLocaleDateString(LocaleStore.locale, { month: "2-digit", day: "2-digit" });
};

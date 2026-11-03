// Module ID: 14230
// Function ID: 14231
// Name: entitlementExpirationDateToString
// Dependencies: [2191, 2]
// Exports: default

// Module 14230 (entitlementExpirationDateToString)
import LocaleStore from "LocaleStore" /* 2191 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  const date = new Date(arg0);
  return date.toLocaleDateString(LocaleStore.locale, { month: "2-digit", day: "2-digit" });
};

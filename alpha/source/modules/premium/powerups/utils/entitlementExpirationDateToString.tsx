// Module ID: 12003
// Function ID: 12004
// Name: entitlementExpirationDateToString
// Dependencies: [2111, 2]
// Exports: default

// Module 12003 (entitlementExpirationDateToString)
import LocaleStore from "LocaleStore" /* 2111 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  return new Date(arg0).toLocaleDateString(LocaleStore.locale, { month: "2-digit", day: "2-digit" });
};

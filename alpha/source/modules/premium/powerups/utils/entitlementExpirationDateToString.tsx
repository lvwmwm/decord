// Module ID: 12865
// Function ID: 12866
// Name: entitlementExpirationDateToString
// Dependencies: [2109, 2]
// Exports: default

// Module 12865 (entitlementExpirationDateToString)
import LocaleStore from "LocaleStore" /* 2109 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  return new Date(arg0).toLocaleDateString(LocaleStore.locale, { month: "2-digit", day: "2-digit" });
};

// Module ID: 12021
// Function ID: 12022
// Name: entitlementExpirationDateToString
// Dependencies: [2112, 2]
// Exports: default

// Module 12021 (entitlementExpirationDateToString)
import LocaleStore from "LocaleStore" /* 2112 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  return new Date(arg0).toLocaleDateString(LocaleStore.locale, { month: "2-digit", day: "2-digit" });
};

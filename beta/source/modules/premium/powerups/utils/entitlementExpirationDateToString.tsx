// Module ID: 12724
// Function ID: 12725
// Name: entitlementExpirationDateToString
// Dependencies: [2113, 2]
// Exports: default

// Module 12724 (entitlementExpirationDateToString)
import LocaleStore from "LocaleStore" /* 2113 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  return new Date(arg0).toLocaleDateString(LocaleStore.locale, { month: "2-digit", day: "2-digit" });
};

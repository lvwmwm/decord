// Module ID: 12658
// Function ID: 12659
// Name: entitlementExpirationDateToString
// Dependencies: [2025, 2]
// Exports: default

// Module 12658 (entitlementExpirationDateToString)
import LocaleStore from "LocaleStore" /* 2025 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  return new Date(arg0).toLocaleDateString(LocaleStore.locale, { month: "2-digit", day: "2-digit" });
};

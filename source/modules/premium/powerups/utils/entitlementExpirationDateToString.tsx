// Module ID: 12158
// Function ID: 12159
// Name: entitlementExpirationDateToString
// Dependencies: [1996, 2]
// Exports: default

// Module 12158 (entitlementExpirationDateToString)
import closure_0 from "_getSystemLocale" /* 1996 */;

const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  return new Date(arg0).toLocaleDateString(locale.locale, { month: "2-digit", day: "2-digit" });
};

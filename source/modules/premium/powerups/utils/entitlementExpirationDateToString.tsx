// Module ID: 11743
// Function ID: 11744
// Name: entitlementExpirationDateToString
// Dependencies: [1995, 2]
// Exports: default

// Module 11743 (entitlementExpirationDateToString)
import closure_0 from "_getSystemLocale" /* 1995 */;

const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  return new Date(arg0).toLocaleDateString(locale.locale, { month: "2-digit", day: "2-digit" });
};

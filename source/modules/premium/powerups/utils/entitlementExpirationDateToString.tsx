// Module ID: 11798
// Function ID: 11799
// Name: entitlementExpirationDateToString
// Dependencies: [1946, 2]
// Exports: default

// Module 11798 (entitlementExpirationDateToString)
import _getSystemLocale from "_getSystemLocale";

const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  return new Date(arg0).toLocaleDateString(locale.locale, { month: "2-digit", day: "2-digit" });
};

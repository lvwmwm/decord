// Module ID: 11819
// Function ID: 11820
// Name: entitlementExpirationDateToString
// Dependencies: [1975, 2]
// Exports: default

// Module 11819 (entitlementExpirationDateToString)
import _getSystemLocale from "_getSystemLocale";

const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  return new Date(arg0).toLocaleDateString(locale.locale, { month: "2-digit", day: "2-digit" });
};

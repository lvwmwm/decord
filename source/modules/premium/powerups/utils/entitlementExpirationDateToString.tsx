// Module ID: 11946
// Function ID: 11947
// Name: entitlementExpirationDateToString
// Dependencies: [1994, 2]
// Exports: default

// Module 11946 (entitlementExpirationDateToString)
import _getSystemLocale from "_getSystemLocale";

const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  return new Date(arg0).toLocaleDateString(locale.locale, { month: "2-digit", day: "2-digit" });
};

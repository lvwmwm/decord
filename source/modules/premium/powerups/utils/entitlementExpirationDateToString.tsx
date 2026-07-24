// Module ID: 11587
// Function ID: 90203
// Name: entitlementExpirationDateToString
// Dependencies: [1921, 2]
// Exports: default

// Module 11587 (entitlementExpirationDateToString)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  return new Date(arg0).toLocaleDateString(locale.locale, { month: "2-digit", day: "2-digit" });
};

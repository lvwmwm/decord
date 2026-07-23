// Module ID: 11558
// Function ID: 89962
// Name: entitlementExpirationDateToString
// Dependencies: [1921, 2]
// Exports: default

// Module 11558 (entitlementExpirationDateToString)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  return new Date(arg0).toLocaleDateString(locale.locale, { month: "2-digit", day: "2-digit" });
};

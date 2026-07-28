// Module ID: 11593
// Function ID: 90076
// Name: entitlementExpirationDateToString
// Dependencies: [1922, 2]
// Exports: default

// Module 11593 (entitlementExpirationDateToString)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  return new Date(arg0).toLocaleDateString(locale.locale, { month: "2-digit", day: "2-digit" });
};

// Module ID: 11547
// Function ID: 89900
// Name: entitlementExpirationDateToString
// Dependencies: []
// Exports: default

// Module 11547 (entitlementExpirationDateToString)
let closure_0 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  return new Date(arg0).toLocaleDateString(locale.locale, { "Bool(false)": true, "Bool(false)": true });
};

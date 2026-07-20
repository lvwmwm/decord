// Module ID: 11540
// Function ID: 89865
// Name: entitlementExpirationDateToString
// Dependencies: []
// Exports: default

// Module 11540 (entitlementExpirationDateToString)
let closure_0 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  return new Date(arg0).toLocaleDateString(locale.locale, { -1106464438: true, 417148012: true });
};

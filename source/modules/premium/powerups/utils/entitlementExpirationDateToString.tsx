// Module ID: 11547
// Function ID: 89888
// Name: entitlementExpirationDateToString
// Dependencies: []
// Exports: default

// Module 11547 (entitlementExpirationDateToString)
let closure_0 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  return new Date(arg0).toLocaleDateString(locale.locale, { 1618834222: true, -1200702078: true });
};

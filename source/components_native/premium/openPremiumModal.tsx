// Module ID: 9297
// Function ID: 72700
// Name: openPremiumModal
// Dependencies: [4372, 6305, 1935, 2]
// Exports: default

// Module 9297 (openPremiumModal)
const result = require("maybeLoadBundle").fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  let obj = importDefault(4372);
  obj = { presentation: "modal" };
  return obj.pushLazy(require(1935) /* maybeLoadBundle */(6305, dependencyMap.paths), merged, "PREMIUM_KEY", obj);
};

// Module ID: 9253
// Function ID: 72549
// Name: openPremiumModal
// Dependencies: [4338, 6269, 1935, 2]
// Exports: default

// Module 9253 (openPremiumModal)
const result = require("maybeLoadBundle").fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  let obj = importDefault(4338);
  obj = { presentation: "modal" };
  return obj.pushLazy(require(1935) /* maybeLoadBundle */(6269, dependencyMap.paths), merged, "PREMIUM_KEY", obj);
};

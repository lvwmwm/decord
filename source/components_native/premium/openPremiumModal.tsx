// Module ID: 8139
// Function ID: 64405
// Name: openPremiumModal
// Dependencies: [4337, 6649, 1934, 2]
// Exports: default

// Module 8139 (openPremiumModal)
const result = require("maybeLoadBundle").fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  let obj = importDefault(4337);
  obj = { presentation: "modal" };
  return obj.pushLazy(require(1934) /* maybeLoadBundle */(6649, dependencyMap.paths), merged, "PREMIUM_KEY", obj);
};

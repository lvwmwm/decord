// Module ID: 9325
// Function ID: 9326
// Name: openPremiumModal
// Dependencies: [5260, 7381, 2007, 2]
// Exports: default

// Module 9325 (openPremiumModal)
const result = require("asyncRequireImpl").fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(closure_0) {
  return importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(7381, dependencyMap.paths), closure_0, "PREMIUM_KEY", { presentation: "modal" });
};

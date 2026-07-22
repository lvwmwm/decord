// Module ID: 8133
// Function ID: 64368
// Name: openPremiumModal
// Dependencies: []
// Exports: default

// Module 8133 (openPremiumModal)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(closure_2) {
  let obj = importDefault(dependencyMap[0]);
  obj = { presentation: "modal" };
  return obj.pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), closure_2, "PREMIUM_KEY", obj);
};

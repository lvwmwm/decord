// Module ID: 8837
// Function ID: 8838
// Name: openPremiumModal
// Dependencies: [4675, 7083, 2009, 2]
// Exports: default

// Module 8837 (openPremiumModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4675 from "module_4675" /* 4675 */;

const result = set.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(closure_0) {
  return _modDef4675.pushLazy(asyncRequireImpl(7083, dependencyMap.paths), closure_0, "PREMIUM_KEY", { presentation: "modal" });
};

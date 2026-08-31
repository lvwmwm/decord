// Module ID: 8361
// Function ID: 8362
// Name: openPremiumModal
// Dependencies: [4691, 7123, 2009, 2]
// Exports: default

// Module 8361 (openPremiumModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4691 from "module_4691" /* 4691 */;

const result = set.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(closure_0) {
  return _modDef4691.pushLazy(asyncRequireImpl(7123, dependencyMap.paths), closure_0, "PREMIUM_KEY", { presentation: "modal" });
};

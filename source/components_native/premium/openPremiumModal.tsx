// Module ID: 8406
// Function ID: 8407
// Name: openPremiumModal
// Dependencies: [4724, 7165, 2008, 2]
// Exports: default

// Module 8406 (openPremiumModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4724 from "module_4724" /* 4724 */;

const result = set.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(closure_0) {
  return _modDef4724.pushLazy(asyncRequireImpl(7165, dependencyMap.paths), closure_0, "PREMIUM_KEY", { presentation: "modal" });
};

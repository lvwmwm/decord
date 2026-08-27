// Module ID: 8325
// Function ID: 8326
// Name: openPremiumModal
// Dependencies: [4676, 7089, 2009, 2]
// Exports: default

// Module 8325 (openPremiumModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;

const result = set.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(closure_0) {
  return _modDef4676.pushLazy(asyncRequireImpl(7089, dependencyMap.paths), closure_0, "PREMIUM_KEY", { presentation: "modal" });
};

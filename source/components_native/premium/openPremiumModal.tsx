// Module ID: 8339
// Function ID: 8340
// Name: openPremiumModal
// Dependencies: [4689, 7102, 2010, 2]
// Exports: default

// Module 8339 (openPremiumModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import _modDef4689 from "module_4689" /* 4689 */;

const result = set.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(closure_0) {
  return _modDef4689.pushLazy(asyncRequireImpl(7102, dependencyMap.paths), closure_0, "PREMIUM_KEY", { presentation: "modal" });
};

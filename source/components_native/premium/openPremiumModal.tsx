// Module ID: 9321
// Function ID: 9322
// Name: openPremiumModal
// Dependencies: [4731, 7345, 2008, 2]
// Exports: default

// Module 9321 (openPremiumModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;

const result = set.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(closure_0) {
  return _modDef4731.pushLazy(asyncRequireImpl(7345, dependencyMap.paths), closure_0, "PREMIUM_KEY", { presentation: "modal" });
};

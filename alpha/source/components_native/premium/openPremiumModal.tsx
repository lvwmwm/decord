// Module ID: 9884
// Function ID: 9885
// Name: openPremiumModal
// Dependencies: [6738, 7588, 1995, 2]
// Exports: default

// Module 9884 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7588, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

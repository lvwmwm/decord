// Module ID: 9720
// Function ID: 9721
// Name: openPremiumModal
// Dependencies: [6623, 7471, 2002, 2]
// Exports: default

// Module 9720 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7471, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

// Module ID: 9513
// Function ID: 9514
// Name: openPremiumModal
// Dependencies: [6785, 9514, 2118, 2]
// Exports: default

// Module 9513 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(9514, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

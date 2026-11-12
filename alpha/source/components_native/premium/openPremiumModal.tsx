// Module ID: 9512
// Function ID: 9513
// Name: openPremiumModal
// Dependencies: [6785, 9513, 2118, 2]
// Exports: default

// Module 9512 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(9513, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

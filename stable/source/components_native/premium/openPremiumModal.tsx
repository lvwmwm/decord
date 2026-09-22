// Module ID: 9522
// Function ID: 9523
// Name: openPremiumModal
// Dependencies: [4839, 7515, 1896, 2]
// Exports: default

// Module 9522 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7515, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

// Module ID: 9512
// Function ID: 9513
// Name: openPremiumModal
// Dependencies: [4960, 7657, 1980, 2]
// Exports: default

// Module 9512 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4960 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7657, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

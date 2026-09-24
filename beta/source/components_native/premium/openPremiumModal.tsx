// Module ID: 9534
// Function ID: 9535
// Name: openPremiumModal
// Dependencies: [4993, 7688, 1984, 2]
// Exports: default

// Module 9534 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7688, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

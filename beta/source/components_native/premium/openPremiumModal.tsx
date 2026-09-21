// Module ID: 9502
// Function ID: 9503
// Name: openPremiumModal
// Dependencies: [4961, 7656, 1984, 2]
// Exports: default

// Module 9502 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7656, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

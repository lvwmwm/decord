// Module ID: 9538
// Function ID: 9539
// Name: openPremiumModal
// Dependencies: [4991, 7686, 1980, 2]
// Exports: default

// Module 9538 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7686, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

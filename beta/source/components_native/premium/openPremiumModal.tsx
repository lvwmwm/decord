// Module ID: 8695
// Function ID: 8696
// Name: openPremiumModal
// Dependencies: [5039, 6832, 1981, 2]
// Exports: default

// Module 8695 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(6832, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

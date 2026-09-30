// Module ID: 8894
// Function ID: 8895
// Name: openPremiumModal
// Dependencies: [5069, 7028, 1981, 2]
// Exports: default

// Module 8894 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7028, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

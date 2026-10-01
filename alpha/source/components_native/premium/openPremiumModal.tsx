// Module ID: 8886
// Function ID: 8887
// Name: openPremiumModal
// Dependencies: [5048, 7020, 1981, 2]
// Exports: default

// Module 8886 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5048 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7020, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

// Module ID: 9792
// Function ID: 9793
// Name: openPremiumModal
// Dependencies: [6672, 7522, 2002, 2]
// Exports: default

// Module 9792 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7522, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

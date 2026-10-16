// Module ID: 9629
// Function ID: 9630
// Name: openPremiumModal
// Dependencies: [6153, 7355, 2002, 2]
// Exports: default

// Module 9629 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6153 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7355, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

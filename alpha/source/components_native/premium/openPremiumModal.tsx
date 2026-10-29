// Module ID: 9858
// Function ID: 9859
// Name: openPremiumModal
// Dependencies: [6731, 7580, 2000, 2]
// Exports: default

// Module 9858 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7580, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

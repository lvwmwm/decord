// Module ID: 9328
// Function ID: 9329
// Name: openPremiumModal
// Dependencies: [5940, 7118, 1999, 2]
// Exports: default

// Module 9328 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7118, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

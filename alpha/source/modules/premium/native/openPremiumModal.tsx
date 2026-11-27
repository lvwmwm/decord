// Module ID: 9102
// Function ID: 9103
// Name: openPremiumModal
// Dependencies: [6130, 9103, 2120, 2]
// Exports: default

// Module 9102 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(9103, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

// Module ID: 9005
// Function ID: 9006
// Name: openPremiumModal
// Dependencies: [6337, 9006, 2121, 2]
// Exports: default

// Module 9005 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6337 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(9006, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

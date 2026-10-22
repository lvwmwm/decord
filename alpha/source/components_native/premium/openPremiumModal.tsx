// Module ID: 9762
// Function ID: 9763
// Name: openPremiumModal
// Dependencies: [6658, 7506, 2002, 2]
// Exports: default

// Module 9762 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6658 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7506, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

// Module ID: 9393
// Function ID: 9394
// Name: openPremiumModal
// Dependencies: [5934, 7129, 2000, 2]
// Exports: default

// Module 9393 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7129, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

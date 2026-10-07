// Module ID: 8914
// Function ID: 8915
// Name: openPremiumModal
// Dependencies: [5093, 6918, 1987, 2]
// Exports: default

// Module 8914 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(6918, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

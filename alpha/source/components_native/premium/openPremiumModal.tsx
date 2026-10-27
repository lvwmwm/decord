// Module ID: 9794
// Function ID: 9795
// Name: openPremiumModal
// Dependencies: [6673, 7523, 1999, 2]
// Exports: default

// Module 9794 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7523, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

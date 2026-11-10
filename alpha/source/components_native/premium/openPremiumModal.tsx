// Module ID: 10033
// Function ID: 10034
// Name: openPremiumModal
// Dependencies: [6801, 7674, 2118, 2]
// Exports: default

// Module 10033 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7674, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

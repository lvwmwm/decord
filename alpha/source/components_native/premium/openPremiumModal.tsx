// Module ID: 10043
// Function ID: 10044
// Name: openPremiumModal
// Dependencies: [6824, 7694, 2118, 2]
// Exports: default

// Module 10043 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7694, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

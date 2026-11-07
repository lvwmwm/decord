// Module ID: 10027
// Function ID: 10028
// Name: openPremiumModal
// Dependencies: [6799, 7671, 2118, 2]
// Exports: default

// Module 10027 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7671, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

// Module ID: 9366
// Function ID: 9367
// Name: openPremiumModal
// Dependencies: [5941, 7123, 2000, 2]
// Exports: default

// Module 9366 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7123, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

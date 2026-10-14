// Module ID: 9403
// Function ID: 9404
// Name: openPremiumModal
// Dependencies: [5939, 7136, 2000, 2]
// Exports: default

// Module 9403 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5939 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7136, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

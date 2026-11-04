// Module ID: 10084
// Function ID: 10085
// Name: openPremiumModal
// Dependencies: [6879, 7735, 2123, 2]
// Exports: default

// Module 10084 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7735, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

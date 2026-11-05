// Module ID: 10092
// Function ID: 10093
// Name: openPremiumModal
// Dependencies: [6882, 7740, 2123, 2]
// Exports: default

// Module 10092 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7740, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

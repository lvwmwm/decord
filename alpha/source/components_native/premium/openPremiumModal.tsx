// Module ID: 10036
// Function ID: 10037
// Name: openPremiumModal
// Dependencies: [6864, 7719, 2123, 2]
// Exports: default

// Module 10036 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7719, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

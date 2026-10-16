// Module ID: 9630
// Function ID: 9631
// Name: openPremiumModal
// Dependencies: [6152, 7353, 2002, 2]
// Exports: default

// Module 9630 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7353, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

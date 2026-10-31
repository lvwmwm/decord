// Module ID: 9905
// Function ID: 9906
// Name: openPremiumModal
// Dependencies: [6744, 7595, 1994, 2]
// Exports: default

// Module 9905 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 1994 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7595, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

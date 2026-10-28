// Module ID: 9826
// Function ID: 9827
// Name: openPremiumModal
// Dependencies: [6707, 7557, 1999, 2]
// Exports: default

// Module 9826 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7557, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

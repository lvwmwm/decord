// Module ID: 9693
// Function ID: 9694
// Name: openPremiumModal
// Dependencies: [6190, 7401, 2002, 2]
// Exports: default

// Module 9693 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7401, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

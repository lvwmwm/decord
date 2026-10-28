// Module ID: 9824
// Function ID: 9825
// Name: openPremiumModal
// Dependencies: [6704, 7554, 2002, 2]
// Exports: default

// Module 9824 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6704 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7554, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

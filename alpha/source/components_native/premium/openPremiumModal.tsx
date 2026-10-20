// Module ID: 9707
// Function ID: 9708
// Name: openPremiumModal
// Dependencies: [6620, 7468, 2002, 2]
// Exports: default

// Module 9707 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6620 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7468, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

// Module ID: 9750
// Function ID: 9751
// Name: openPremiumModal
// Dependencies: [6651, 7499, 2002, 2]
// Exports: default

// Module 9750 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7499, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

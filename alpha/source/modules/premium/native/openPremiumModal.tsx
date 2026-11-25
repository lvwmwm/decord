// Module ID: 9059
// Function ID: 9060
// Name: openPremiumModal
// Dependencies: [6099, 9060, 2119, 2]
// Exports: default

// Module 9059 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(9060, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

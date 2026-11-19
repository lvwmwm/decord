// Module ID: 8979
// Function ID: 8980
// Name: openPremiumModal
// Dependencies: [6308, 8980, 2121, 2]
// Exports: default

// Module 8979 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(8980, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

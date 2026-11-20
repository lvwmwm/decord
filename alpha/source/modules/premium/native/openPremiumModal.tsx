// Module ID: 8979
// Function ID: 8980
// Name: openPremiumModal
// Dependencies: [6310, 8980, 2119, 2]
// Exports: default

// Module 8979 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(8980, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

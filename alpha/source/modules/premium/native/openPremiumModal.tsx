// Module ID: 8960
// Function ID: 8961
// Name: openPremiumModal
// Dependencies: [6004, 8961, 2119, 2]
// Exports: default

// Module 8960 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6004 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(8961, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

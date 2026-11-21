// Module ID: 9099
// Function ID: 9100
// Name: openPremiumModal
// Dependencies: [6429, 9100, 2119, 2]
// Exports: default

// Module 9099 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(9100, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

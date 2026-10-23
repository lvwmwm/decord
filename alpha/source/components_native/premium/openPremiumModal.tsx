// Module ID: 9791
// Function ID: 9792
// Name: openPremiumModal
// Dependencies: [6670, 7520, 2002, 2]
// Exports: default

// Module 9791 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6670 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7520, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

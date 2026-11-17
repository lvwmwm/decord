// Module ID: 9591
// Function ID: 9592
// Name: openPremiumModal
// Dependencies: [6833, 9592, 2121, 2]
// Exports: default

// Module 9591 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(9592, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

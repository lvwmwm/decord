// Module ID: 9579
// Function ID: 9580
// Name: openPremiumModal
// Dependencies: [6848, 9580, 2121, 2]
// Exports: default

// Module 9579 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(9580, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

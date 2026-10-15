// Module ID: 9614
// Function ID: 9615
// Name: openPremiumModal
// Dependencies: [6150, 7351, 2000, 2]
// Exports: default

// Module 9614 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7351, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

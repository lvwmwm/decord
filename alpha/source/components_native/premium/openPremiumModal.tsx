// Module ID: 9585
// Function ID: 9586
// Name: openPremiumModal
// Dependencies: [5030, 7740, 1980, 2]
// Exports: default

// Module 9585 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5030 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7740, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

// Module ID: 10060
// Function ID: 10061
// Name: openPremiumModal
// Dependencies: [6831, 7704, 2118, 2]
// Exports: default

// Module 10060 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(7704, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};

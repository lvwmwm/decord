// Module ID: 18426
// Function ID: 18427
// Name: openConjureFirstShareModal
// Dependencies: [6308, 18427, 2121, 2]
// Exports: default

// Module 18426 (openConjureFirstShareModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureFirstShareModal.tsx");

export default function openConjureFirstShareModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(18427, dependencyMap.paths), merged, "ConjureFirstShareModal");
};

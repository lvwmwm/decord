// Module ID: 18432
// Function ID: 18433
// Name: openConjureFirstShareModal
// Dependencies: [6337, 18433, 2121, 2]
// Exports: default

// Module 18432 (openConjureFirstShareModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6337 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureFirstShareModal.tsx");

export default function openConjureFirstShareModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(18433, dependencyMap.paths), merged, "ConjureFirstShareModal");
};

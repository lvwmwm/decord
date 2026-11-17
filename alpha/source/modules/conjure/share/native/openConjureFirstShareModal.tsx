// Module ID: 14561
// Function ID: 14562
// Name: openConjureFirstShareModal
// Dependencies: [6833, 14562, 2121, 2]
// Exports: default

// Module 14561 (openConjureFirstShareModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureFirstShareModal.tsx");

export default function openConjureFirstShareModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14562, dependencyMap.paths), merged, "ConjureFirstShareModal");
};

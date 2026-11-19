// Module ID: 14428
// Function ID: 14429
// Name: openEditNoteModal
// Dependencies: [6308, 14429, 2121, 2]
// Exports: default

// Module 14428 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14429, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};

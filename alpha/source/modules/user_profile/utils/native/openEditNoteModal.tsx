// Module ID: 14441
// Function ID: 14442
// Name: openEditNoteModal
// Dependencies: [6337, 14442, 2121, 2]
// Exports: default

// Module 14441 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6337 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14442, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};

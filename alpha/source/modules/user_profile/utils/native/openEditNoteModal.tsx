// Module ID: 14599
// Function ID: 14600
// Name: openEditNoteModal
// Dependencies: [6707, 14600, 1999, 2]
// Exports: default

// Module 14599 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14600, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};

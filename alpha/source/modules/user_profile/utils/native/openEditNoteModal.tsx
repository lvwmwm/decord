// Module ID: 14160
// Function ID: 14161
// Name: openEditNoteModal
// Dependencies: [6623, 14161, 2002, 2]
// Exports: default

// Module 14160 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14161, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};

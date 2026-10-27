// Module ID: 14376
// Function ID: 14377
// Name: openEditNoteModal
// Dependencies: [6673, 14377, 1999, 2]
// Exports: default

// Module 14376 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14377, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};

// Module ID: 14287
// Function ID: 14288
// Name: openEditNoteModal
// Dependencies: [6657, 14288, 2002, 2]
// Exports: default

// Module 14287 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14288, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};

// Module ID: 14105
// Function ID: 14106
// Name: openEditNoteModal
// Dependencies: [6190, 14106, 2002, 2]
// Exports: default

// Module 14105 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14106, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};

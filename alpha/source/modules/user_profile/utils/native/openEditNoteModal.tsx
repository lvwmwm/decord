// Module ID: 14340
// Function ID: 14341
// Name: openEditNoteModal
// Dependencies: [6672, 14341, 2002, 2]
// Exports: default

// Module 14340 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14341, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};

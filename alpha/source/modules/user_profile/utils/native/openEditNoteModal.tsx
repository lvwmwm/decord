// Module ID: 14335
// Function ID: 14336
// Name: openEditNoteModal
// Dependencies: [6672, 14336, 2002, 2]
// Exports: default

// Module 14335 (openEditNoteModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14336, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
